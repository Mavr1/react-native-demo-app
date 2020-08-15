import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function PostsItem({ description, location, comments, photo }) {
  const onGoToComments = () => console.log('comments');
  const onGoToMap = () => console.log('map');

  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.photo} />
      <Text style={styles.photoDescription}>{description}</Text>

      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.commentsButton}
          onPress={() => onGoToComments()}
          activeOpacity={0.4}
        >
          <FontAwesome
            name="comment-o"
            size={24}
            color="#BDBDBD"
            style={styles.commentsIcon}
          />
        </TouchableOpacity>
        <Text style={styles.textLocation}>{comments}</Text>
        <TouchableOpacity
          style={styles.locationButton}
          onPress={() => onGoToMap()}
          activeOpacity={0.4}
        >
          <SimpleLineIcons
            name="location-pin"
            size={24}
            color="#BDBDBD"
            style={styles.locationIcon}
          />
        </TouchableOpacity>
        <Text style={styles.textLocation}>{location}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
