import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function PostsItem({
  postOwnerId,
  id,
  description,
  location,
  comments,
  photo,
  navigation,
}) {
  const onGoToComments = () =>
    navigation.navigate('Comments', { id, photo, postOwnerId });
  const onGoToMap = () => console.log('map');

  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image
          source={{
            uri: photo,
          }}
          style={styles.photo}
        />
      </View>
      <Text style={styles.photoDescription}>{description}</Text>

      <View style={styles.footerContainer}>
        <View style={styles.commentContainer}>
          <TouchableOpacity
            style={styles.commentsButton}
            onPress={onGoToComments}
            activeOpacity={0.4}
          >
            <FontAwesome
              name="comment-o"
              size={24}
              color="#BDBDBD"
              style={styles.commentsIcon}
            />
          </TouchableOpacity>
          <Text style={styles.commentsNumber}>{comments}</Text>
        </View>
        <View style={styles.locationContainer}>
          <TouchableOpacity
            style={styles.locationButton}
            onPress={onGoToMap}
            activeOpacity={0.4}
          >
            <SimpleLineIcons
              name="location-pin"
              size={24}
              color="#BDBDBD"
              style={styles.locationIcon}
            />
          </TouchableOpacity>
          <Text style={styles.locationDescription}>{location}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 34,
  },

  photoContainer: {
    height: 240,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    justifyContent: 'center',
  },

  photo: { flex: 1, borderRadius: 8 },

  photoDescription: {
    marginTop: 8,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#212121',
  },

  footerContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  commentContainer: { flexDirection: 'row' },

  locationContainer: { flexDirection: 'row' },

  commentsIcon: { marginRight: 8 },

  commentsNumber: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#BDBDBD',
  },

  locationIcon: { marginRight: 8 },

  locationDescription: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#212121',
  },
});
