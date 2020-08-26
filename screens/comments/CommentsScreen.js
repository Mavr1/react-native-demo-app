import React, { useEffect, useState } from 'react';
import fb from '../../firebase/config';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from 'react-native';
import CommentInput from '../../components/commentInput/CommentInput';
import CommentItem from '../../components/commentItem/CommentItem';
import { styles } from './styles';
import { useSelector } from 'react-redux';

export default function CommentsScreen({
  navigation,
  route: { params },
  setIsHeaderShown,
}) {
  const currentUserId = useSelector((state) => state.auth.uid);
  const { commentsData } = useSelector((state) => state.comments);
  const commentsFiltered = commentsData.filter(
    (item) => item.postId === params.postId
  );

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setIsHeaderShown(true);
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    (async () => {
      const res = await commentsFiltered.map(async (item) => {
        const data = await fb
          .storage()
          .ref(`usersAvatars/${item.authorId}`)
          .listAll();
        const avatarRef = await data.items.pop().getDownloadURL();
        return { ...item, avatar: avatarRef };
      });

      Promise.all(res)
        .then((data) => setComments(data))
        .catch((err) => console.log('err :>> ', err));
    })();
  }, []);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={90}
      style={{ flex: 1, backgroundColor: '#fff' }}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginHorizontal: 16,
        }}
      >
        <View style={styles.photoContainer}>
          <Image
            source={{
              uri: params.photo,
            }}
            style={styles.photo}
          />
        </View>
        <View style={styles.commentsContainer}>
          {comments.length > 0 ? (
            <FlatList
              data={comments.sort((a, b) => {
                return new Date(a.date).getTime() > new Date(b.date).getTime()
                  ? 1
                  : -1;
              })}
              renderItem={({ item }) => (
                <CommentItem
                  text={item.comment}
                  date={item.date}
                  isOwn={item.authorId === currentUserId}
                  avatar={item.avatar}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <Text style={styles.noComments}>No comments yet</Text>
          )}
        </View>
        <CommentInput postId={params.postId} postOwnerId={params.postOwnerId} />
      </View>
    </KeyboardAvoidingView>
  );
}
