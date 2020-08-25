import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addComment } from '../../redux/comments/commentsOperations';
import { useSelector, useDispatch } from 'react-redux';

export default function CommentInput({ postId, postOwnerId }) {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const uid = useSelector((state) => state.auth.uid);

  const commentInputHandler = (text) => setComment(text);

  const onAddComment = () => {
    const date = new Date();
    const data = {
      date: date.toLocaleString('ru'),
      comment,
      authorId: uid,
      postId,
      postOwnerId,
    };
    dispatch(addComment(data));
    setComment('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={comment}
        onChangeText={commentInputHandler}
        placeholder="Комментировать..."
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => onAddComment()}
        activeOpacity={0.4}
      >
        <AntDesign name="arrowup" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 100,
    paddingVertical: 8,
    marginVertical: 16,
  },

  input: {
    flex: 1,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#BDBDBD',
    marginLeft: 16,
  },

  addButton: {
    backgroundColor: '#FF6C00',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
});
