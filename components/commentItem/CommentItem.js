import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function CommentItem({ avatar, text, date, isOwn }) {
  return (
    <View style={isOwn ? styles.containerOwn : styles.container}>
      <View style={isOwn ? styles.avatarWrapperOwn : styles.avatarWrapper}>
        <Image source={{ uri: avatar }} style={styles.userAvatar} />
      </View>
      <View style={isOwn ? styles.bubbleOwn : styles.bubble}>
        <Text style={styles.comment}>{text}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    marginBottom: 24,
  },

  containerOwn: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    marginBottom: 24,
  },

  avatarWrapper: { width: 28, height: 28, borderRadius: 14, marginRight: 16 },

  avatarWrapperOwn: { width: 28, height: 28, borderRadius: 14, marginLeft: 16 },

  userAvatar: { flex: 1, borderRadius: 14 },

  bubble: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    padding: 16,
    borderRadius: 6,
    borderTopLeftRadius: 0,
  },

  bubbleOwn: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    padding: 16,
    borderRadius: 6,
    borderTopRightRadius: 0,
  },

  comment: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    color: '#212121',
    marginBottom: 8,
  },

  date: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    color: '#bdbdbd',
    alignSelf: 'flex-end',
  },
});
