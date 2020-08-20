import React from 'react';
import { useSelector } from 'react-redux';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default function AddUserAvatar() {
  const avatar = useSelector((state) => state.auth.avatar);

  const addAvatar = () => console.log('add avatar');

  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <TouchableOpacity
        style={styles.addButton}
        onPress={addAvatar}
        activeOpacity={0.6}
      >
        {!avatar ? (
          <EvilIcons name="plus" size={38} color="#FF6C00" />
        ) : (
          <EvilIcons name="close-o" size={38} color="#BDBDBD" />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -60,
    left: '50%',
    transform: [{ translateX: -60 }],
    width: 120,
    height: 120,
    backgroundColor: '#f6f6f6',
    borderRadius: 16,
  },

  avatar: {
    flex: 1,
    borderRadius: 16,
  },

  addButton: {
    position: 'absolute',
    bottom: 20,
    right: -19,
  },
});
