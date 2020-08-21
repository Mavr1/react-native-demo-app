import React, { useState, useEffect } from 'react';
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
import * as Location from 'expo-location';
import { useSelector, useDispatch } from 'react-redux';
import fb from '../../firebase/config';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import CameraView from '../../components/cameraView/CameraView';
import { addPost } from '../../redux/posts/postsOperations';
import ButtonPublish from '../../components/buttonPublish/ButtonPublish';
import { styles } from './styles';

export default function CreatePostsScreen({
  navigation,
  setIsHeaderShown,
  setHeaderTitle,
}) {
  const [postDescription, setPostDescription] = useState('');
  const [postLocation, setPostLocation] = useState('');
  const [postGeoLocation, setPostGeoLocation] = useState('');
  const [postPhoto, setPostPhoto] = useState('');
  const [isCameraOn, setIsCameraOn] = useState(false);

  const postDescriptionHandler = (text) => setPostDescription(text);
  const postLocationHandler = (text) => setPostLocation(text);

  const name = useSelector((state) => state.auth.name);
  const uid = useSelector((state) => state.auth.uid);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
      }
      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setPostGeoLocation(coords);
    })();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setIsHeaderShown(true);
      setHeaderTitle('Создать публикацию');
    });

    return unsubscribe;
  }, [navigation]);

  const onSnapshot = async (photoRef) => {
    setIsCameraOn(false);
    setPostPhoto(photoRef);
  };

  const onDeletePhoto = () => {
    setPostPhoto('');
  };

  const onDeletePost = () => console.log('Delete Post');

  const onPublish = async () => {
    if (!postPhoto || !postDescription) {
      return;
    }

    const photoResponse = await fetch(postPhoto);
    const photoBlob = await photoResponse.blob();
    const uniqPhotoId = Date.now().toString();
    await fb.storage().ref(`postsImages/${uniqPhotoId}`).put(photoBlob);
    const photo = await fb
      .storage()
      .ref(`postsImages/${uniqPhotoId}`)
      .getDownloadURL();

    dispatch(
      addPost({
        postDescription,
        postLocation,
        postGeoLocation,
        name,
        uid,
        photo,
      })
    );

    setPostDescription('');
    setPostLocation('');
    setPostGeoLocation('');
    setPostPhoto('');
    setIsCameraOn(false);

    navigation.navigate('Posts');
  };

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
              {!isCameraOn && Boolean(postPhoto) && (
                <Image
                  source={{
                    uri: postPhoto,
                  }}
                  style={styles.photo}
                />
              )}
              {isCameraOn && <CameraView onSnapshot={onSnapshot} />}
              {!isCameraOn && !Boolean(postPhoto) && (
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
            {!!postPhoto ? (
              <TouchableOpacity
                style={styles.uploadPhotoButton}
                onPress={() => onDeletePhoto()}
                activeOpacity={0.4}
              >
                <Text style={styles.uploadPhotoDescription}>Удалить фото</Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles.uploadPhotoDescription}></Text>
            )}
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
            <ButtonPublish
              onPublish={onPublish}
              isActive={!!postDescription && !!postPhoto}
            />
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
