import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CommentInput() {
  const [comment, setComment] = useState('');

  const commentInputHandler = (text) => setComment(text);

  const onAddComment = () => console.log('Add Comment');

  return (
    <View style={styles.commentInputContainer}>
      <TextInput
        style={styles.commentInput}
        value={comment}
        onChangeText={commentInputHandler}
        placeholder="Комментировать..."
      />
      <TouchableOpacity
        style={styles.addCommentButton}
        onPress={() => onAddComment()}
        activeOpacity={0.4}
      >
        <AntDesign name="arrowup" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  commentInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 100,
    paddingVertical: 8,
  },

  commentInput: {
    flex: 1,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#BDBDBD',
    marginLeft: 16,
  },

  addCommentButton: {
    backgroundColor: '#FF6C00',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
});
