import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function PostsUserCard({ name, email, avatar }) {
  return (
    <View style={styles.userCard}>
      <View style={styles.photoContainer}>
        {!!avatar ? (
          <Image source={{ uri: avatar }} style={styles.userAvatar} />
        ) : (
          <Text style={styles.noAvatar}>Нет фото</Text>
        )}
      </View>
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

  photoContainer: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
    justifyContent: 'center',
  },

  userAvatar: { flex: 1, borderRadius: 16 },

  userCardDescription: { justifyContent: 'center' },

  userCardName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    color: '#212121',
  },

  noAvatar: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    color: '#bdbdbd',
    textAlign: 'center',
  },
});
