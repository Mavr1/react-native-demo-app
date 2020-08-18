import React, { useEffect } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from 'react-native';
import CommentInput from '../../components/commentInput/CommentInput';
import CommentItem from '../../components/commentItem/CommentItem';
import { styles } from './styles';
import { getComments } from '../../redux/comments/commentsOperations';
import { useDispatch, useSelector } from 'react-redux';

export default function CommentsScreen({ route: { params } }) {
  const { commentsData } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments(params.id));
    return;
  }, []);

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
            <FlatList
              data={commentsData}
              renderItem={({ item }) => (
                <CommentItem
                  id={item.id}
                  text={item.comment}
                  date={item.date}
                  isIncoming={true}
                  // avatar={item.photo}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
          <CommentInput postId={params.id} postOwnerId={params.postOwnerId} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
