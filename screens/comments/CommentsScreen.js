import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import fb from '../../firebase/config';
import CommentInput from '../../components/commentInput/CommentInput';
import CommentItem from '../../components/commentItem/CommentItem';
import loaderSlice from '../../redux/loader/loaderSlice';
import { styles } from './styles';

export default function CommentsScreen({
  navigation,
  route: { params },
  setIsHeaderShown,
}) {
  const currentUserId = useSelector((state) => state.auth.uid);
  const { commentsData } = useSelector((state) => state.comments);
  const isLoading = useSelector((state) => state.loader.isLoading);

  const [comments, setComments] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setIsHeaderShown(true);
    });

    return unsubscribe;
  }, [navigation]);

  const commentsFiltered = commentsData.filter(
    (item) => item.postId === params.postId
  );

  useEffect(() => {
    (async () => {
      dispatch(loaderSlice.actions.setLoadingTrue());
      const res = await commentsFiltered.map(async (item) => {
        const data = await fb
          .storage()
          .ref(`usersAvatars/${item.authorId}`)
          .listAll();
        const avatarRef = await data.items.pop().getDownloadURL();
        return { ...item, avatar: avatarRef };
      });

      await Promise.all(res)
        .then((data) => setComments(data))
        .catch((err) => console.log('err :>> ', err));

      dispatch(loaderSlice.actions.setLoadingFalse());
    })();
  }, [commentsData]);

  const options = {
    // era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    // weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    // second: 'numeric',
  };

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
          <ActivityIndicator
            animating={isLoading}
            size="large"
            color="#FF6C00"
          />
          {!isLoading && comments.length > 0 ? (
            <FlatList
              data={comments.sort((a, b) => {
                return new Date(a.date).getTime() > new Date(b.date).getTime()
                  ? 1
                  : -1;
              })}
              renderItem={({ item }) => (
                <CommentItem
                  text={item.comment}
                  date={new Date(item.date).toLocaleString('ru', options)}
                  isOwn={item.authorId === currentUserId}
                  avatar={item.avatar}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          ) : (
            !isLoading && <Text style={styles.noComments}>No comments yet</Text>
          )}
        </View>
        <CommentInput postId={params.postId} postOwnerId={params.postOwnerId} />
      </View>
    </KeyboardAvoidingView>
  );
}
