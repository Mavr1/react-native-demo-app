import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

export default function PostsScreen() {
  const [posts, setPosts] = useState([]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.userCard}>
          <Image
            source={{ uri: 'https://reactjs.org/logo-og.png' }}
            style={styles.userAvatar}
          />
          <View style={styles.userCardDescription}>
            <Text style={styles.userCardName}>Natali Romanva</Text>
            <Text style={styles.userCardEmail}>n.romanova@gmail.com</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  userCard: {
    flexDirection: 'row',
    marginTop: 32,
    marginHorizontal: 16,
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
