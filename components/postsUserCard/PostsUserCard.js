import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function PostsUserCard({ name, email, avatar }) {
  return (
    <View style={styles.userCard}>
      <Image
        source={{ uri: 'https://reactjs.org/logo-og.png' }}
        style={styles.userAvatar}
      />
      <View style={styles.userCardDescription}>
        <Text style={styles.userCardName}>{name}</Text>
        <Text style={styles.userCardEmail}>{email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userCard: {
    flexDirection: 'row',
    marginVertical: 32,
  },

  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },

  userCardDescription: { justifyContent: 'center' },

  userCardName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    color: '#212121',
  },
});
