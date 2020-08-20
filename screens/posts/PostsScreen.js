import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { getPosts } from '../../redux/posts/postsOperations';
import { useDispatch, useSelector } from 'react-redux';
import PostsUserCard from '../../components/postsUserCard/PostsUserCard';
import PostsItem from '../../components/postsItem/PostsItem';
import { getComments } from '../../redux/comments/commentsOperations';

export default function PostsScreen({
  navigation,
  setIsHeaderShown,
  setHeaderTitle,
}) {
  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);
  const posts = useSelector((state) => state.posts.postsData);
  const comments = useSelector((state) => state.comments.commentsData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getComments());
    return;
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setIsHeaderShown(true);
      setHeaderTitle('Публикации');
    });

    return unsubscribe;
  }, [navigation]);

  const commentsNumber = (postId) =>
    comments.filter((item) => item.postId === postId).length;

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <PostsUserCard name={name} email={email} />
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <PostsItem
              postId={item.id}
              postOwnerId={item.uid}
              description={item.postDescription}
              location={item.postLocation}
              comments={commentsNumber(item.id)}
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
