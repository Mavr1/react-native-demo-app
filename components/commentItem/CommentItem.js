import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function CommentItem({ avatar, text, date }) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={styles.userAvatar}
        />
      </View>
      <View style={styles.bubble}>
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

  avatarWrapper: { width: 28, height: 28, borderRadius: 14, marginRight: 16 },

  userAvatar: { flex: 1, borderRadius: 14 },

  bubble: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    padding: 16,
    borderRadius: 6,
    borderTopLeftRadius: 0,
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
