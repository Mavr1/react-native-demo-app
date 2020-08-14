import React from 'react';
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
import CommentInput from '../../components/CommentInput';
import { styles } from './styles';

export default function CommentsScreen() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.photoContainer}>
            <Image
              source={{
                uri:
                  'https://cdn.pixabay.com/photo/2019/10/21/14/54/oranges-4566275__340.jpg',
              }}
              style={styles.photo}
            />
          </View>
          <CommentInput />
          <View style={{ flex: 1 }} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
