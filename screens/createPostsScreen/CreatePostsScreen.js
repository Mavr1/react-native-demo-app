import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function CreatePostsScreen() {
  const [postDescription, setPostDescription] = useState('');
  const [postLocation, setpostLocation] = useState('');

  const postDescriptionHandler = (text) => setPostDescription(text);
  const postLocationHandler = (text) => setpostLocation(text);

  const onAddPhoto = () => console.log('Add Photo');
  const onDeletePost = () => console.log('Delete Post');
  const onPublish = () => console.log('Publish');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 16 })}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={styles.container}
      >
        <View style={styles.inner}>
          <View style={styles.addPhotoContainer}>
            <View style={styles.photoContainer}>
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2020/08/10/14/17/hummingbird-5477966_960_720.jpg',
                }}
                style={styles.photo}
              />
              <TouchableOpacity
                style={styles.addPhotoIconContainer}
                onPress={onAddPhoto}
                activeOpacity={0.4}
              >
                <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            </View>
            <Text style={styles.addPhotoDescription}>Загрузите фото</Text>
          </View>
          <View style={styles.publishContainer}>
            <View style={styles.postDescriptionInput}>
              <TextInput
                style={styles.postInputText}
                value={postDescription}
                onChangeText={postDescriptionHandler}
                placeholder="Название..."
              />
            </View>
            <View style={styles.postLocationInput}>
              <SimpleLineIcons
                name="location-pin"
                size={24}
                color="#BDBDBD"
                style={styles.postInputIcon}
              />
              <TextInput
                style={styles.postInputTextLocation}
                value={postLocation}
                onChangeText={postLocationHandler}
                placeholder="Местность..."
              />
            </View>
            <TouchableOpacity
              style={styles.buttonPublish}
              onPress={onPublish}
              activeOpacity={0.4}
            >
              <Text style={styles.buttonPublishTitle}>Опубликовать</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.deletePostButton}
            onPress={onDeletePost}
            activeOpacity={0.4}
          >
            <Feather name="trash-2" size={24} color="#dadada" />
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inner: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },

  addPhotoContainer: { marginHorizontal: 16, marginBottom: 48 },

  photoContainer: {
    height: 240,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },

  addPhotoIconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },

  addPhotoDescription: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#BDBDBD',
    marginTop: 8,
  },

  publishContainer: {
    marginHorizontal: 16,
  },

  postDescriptionInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },

  postLocationInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    flexDirection: 'row',
    marginTop: 32,
  },

  postInputIcon: { marginRight: 8 },

  postInputText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    marginBottom: 14,
  },

  postInputTextLocation: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    marginBottom: 14,
    flex: 1,
  },

  buttonPublish: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    height: 52,
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
  },

  buttonPublishTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#BDBDBD',
  },

  deletePostButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    width: 70,
    height: 40,
    marginTop: 20,
  },
});
