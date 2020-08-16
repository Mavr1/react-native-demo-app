import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ButtonPublish({ onPublish, isActive }) {
  return (
    <TouchableOpacity
      style={isActive ? styles.buttonPublishActive : styles.buttonPublish}
      onPress={isActive ? onPublish : () => {}}
      activeOpacity={isActive ? 0.4 : 1}
    >
      <Text
        style={
          isActive ? styles.buttonPublishTitleActive : styles.buttonPublishTitle
        }
      >
        Опубликовать
      </Text>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  buttonPublish: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    height: 52,
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
  },

  buttonPublishActive: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    height: 52,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },

  buttonPublishTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#BDBDBD',
  },

  buttonPublishTitleActive: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#fff',
  },
});
