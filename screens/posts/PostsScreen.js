import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { getPosts } from '../../redux/posts/postsOperations';
import { useDispatch, useSelector } from 'react-redux';
import PostsUserCard from '../../components/postsUserCard/PostsUserCard';

export default function PostsScreen() {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);
  const uid = useSelector((state) => state.auth.uid);

  useEffect(() => {
    dispatch(getPosts(uid));
    return;
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <PostsUserCard name={name} email={email} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
