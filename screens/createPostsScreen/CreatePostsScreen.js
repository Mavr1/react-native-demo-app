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

export default function CreatePostsScreen() {
  const [postDescription, setPostDescription] = useState('');
  const [postLocation, setpostLocation] = useState('');

  const postDescriptionHandler = (text) => setPostDescription(text);
  const postLocationHandler = (text) => setpostLocation(text);

  const onAddPhoto = () => console.log('Add Photo');
  const onPublish = () => console.log('Publish');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
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
        <KeyboardAvoidingView
          style={styles.publishContainer}
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
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
              style={styles.postInputText}
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
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

  publishContainer: { marginHorizontal: 16 },

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
});
