import React, { useEffect } from 'react';
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
  const { commentsData } = useSelector((state) => state.comments);
  const currentUserId = useSelector((state) => state.auth.uid);
  const comments = commentsData.filter((item) => item.postId === params.postId);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setIsHeaderShown(true);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
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
                data={comments}
                renderItem={({ item }) => (
                  <CommentItem
                    id={item.id}
                    text={item.comment}
                    date={item.date}
                    isOwn={item.authorId === currentUserId}
                    // avatar={item.photo}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            ) : (
              <Text style={styles.noComments}>No comments yet</Text>
            )}
          </View>
          <CommentInput
            postId={params.paramsId}
            postOwnerId={params.postOwnerId}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
