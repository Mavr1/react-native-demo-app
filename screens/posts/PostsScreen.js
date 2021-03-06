import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { getPosts } from '../../redux/posts/postsOperations';
import { useDispatch, useSelector } from 'react-redux';
import PostsUserCard from '../../components/postsUserCard/PostsUserCard';
import PostsItem from '../../components/postsItem/PostsItem';
import { getCommentsOne } from '../../redux/comments/commentsOperations';

export default function PostsScreen({
  navigation,
  setIsHeaderShown,
  setHeaderTitle,
}) {
  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);
  const avatar = useSelector((state) => state.auth.avatar);
  const posts = useSelector((state) => state.posts.postsData);
  const comments = useSelector((state) => state.comments.commentsData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getCommentsOne());
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
        <PostsUserCard name={name} email={email} avatar={avatar} />
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <PostsItem
              postId={item.id}
              postOwnerId={item.uid}
              description={item.postDescription}
              location={item.postLocation}
              geoLocation={item.postGeoLocation}
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
