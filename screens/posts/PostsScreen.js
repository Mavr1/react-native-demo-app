import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { getPosts } from '../../redux/posts/postsOperations';
import { useDispatch, useSelector } from 'react-redux';
import PostsUserCard from '../../components/postsUserCard/PostsUserCard';
import PostsItem from '../../components/postsItem/PostsItem';

export default function PostsScreen({ navigation }) {
  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);
  const posts = useSelector((state) => state.posts.postsData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    return;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <PostsUserCard name={name} email={email} />
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <PostsItem
              id={item.id}
              postOwnerId={item.uid}
              description={item.postDescription}
              location={item.postLocation}
              comments={0}
              photo={item.photo}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
});
