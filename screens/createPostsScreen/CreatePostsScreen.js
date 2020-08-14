import React, { useState } from 'react';
import {
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
import CameraView from '../../components/cameraView/CameraView';
import { styles } from './styles';

export default function CreatePostsScreen() {
  const [postDescription, setPostDescription] = useState('');
  const [postLocation, setpostLocation] = useState('');
  const [isCameraOn, setIsCameraOn] = useState(false);

  const postDescriptionHandler = (text) => setPostDescription(text);
  const postLocationHandler = (text) => setpostLocation(text);

  const onUploadPhoto = () => console.log('Add Photo');
  const onDeletePost = () => console.log('Delete Post');
  const onPublish = () => console.log('Publish');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 16 })}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss;
          setIsCameraOn(false);
        }}
      >
        <View style={styles.inner}>
          <View style={styles.addPhotoContainer}>
            <View style={styles.photoContainer}>
              {isCameraOn && <CameraView />}
              {!isCameraOn && (
                <TouchableOpacity
                  style={styles.addPhotoIconContainer}
                  onPress={() => setIsCameraOn(true)}
                  activeOpacity={0.4}
                >
                  <MaterialIcons
                    name="photo-camera"
                    size={24}
                    color="#BDBDBD"
                  />
                </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity
              style={styles.uploadPhotoButton}
              onPress={() => onUploadPhoto()}
              activeOpacity={0.4}
            >
              <Text style={styles.uploadPhotoDescription}>Загрузите фото</Text>
            </TouchableOpacity>
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
