import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from 'react-native';
import { getPosts } from '../../redux/posts/postsOperations';
import { useDispatch, useSelector } from 'react-redux';
import PostsUserCard from '../../components/postsUserCard/PostsUserCard';
import PostsItem from '../../components/postsItem/PostsItem';

export default function PostsScreen() {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);
  const uid = useSelector((state) => state.auth.uid);
  const posts = useSelector((state) => state.posts.postsData);

  useEffect(() => {
    dispatch(getPosts(uid));
    return;
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <PostsUserCard name={name} email={email} />
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <PostsItem
              description={item.postDescription}
              location={item.postLocation}
              comments={0}
              photo={item.postPhoto}
            />
          )}
          keyExtractor={(item) => item.id}
        />
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
