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
import CommentInput from '../../components/commentInput/CommentInput';
import { styles } from './styles';

export default function CommentsScreen({ route: { params } }) {
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
                uri: params.photo,
              }}
              style={styles.photo}
            />
          </View>
          <View style={styles.commentsContainer}></View>
          <CommentInput />
          <View style={{ flex: 1 }} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
