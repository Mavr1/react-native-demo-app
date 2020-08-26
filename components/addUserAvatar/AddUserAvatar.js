import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { updateProfile } from '../../redux/auth/authOperations';

export default function AddUserAvatar({ avatar, setAvatar }) {
  const dispatch = useDispatch();

  const addAvatar = async () => {
    if (avatar && setAvatar) {
      setAvatar('');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult) {
      return;
    }
    !!setAvatar
      ? setAvatar(pickerResult.uri)
      : dispatch(updateProfile(null, pickerResult.uri));
  };

  return (
    <View style={styles.container}>
      {!!avatar ? (
        <Image source={{ uri: avatar }} style={styles.avatar} />
      ) : (
        <Text style={styles.noAvatar}>Добавить фото</Text>
      )}
      <View style={styles.addButton}>
        <TouchableOpacity onPress={addAvatar} activeOpacity={1}>
          {!avatar ? (
            <View style={styles.addIcon}>
              <AntDesign name="plus" size={20} color="#FF6C00" />
            </View>
          ) : (
            <View style={styles.removeIcon}>
              <AntDesign name="close" size={20} color="#BDBDBD" />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
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

  addButton: { position: 'absolute', bottom: 20, right: -13 },

  addIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#FF6C00',
  },

  removeIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#BDBDBD',
  },

  noAvatar: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#bdbdbd',
    textAlign: 'center',
  },
});
