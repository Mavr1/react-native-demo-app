import React, { useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import AddUserAvatar from '../../components/addUserAvatar/AddUserAvatar';
import PostsItem from '../../components/postsItem/PostsItem';
import { logout } from '../../redux/auth/authOperations';
import { styles } from '../profile/styles';

export default function ProfileScreen({ navigation, setIsHeaderShown }) {
  const posts = useSelector((state) => state.posts.postsData);
  const name = useSelector((state) => state.auth.name);
  const avatar = useSelector((state) => state.auth.avatar);
  const uid = useSelector((state) => state.auth.uid);
  const comments = useSelector((state) => state.comments.commentsData);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setIsHeaderShown(false);
    });

    return unsubscribe;
  }, [navigation]);

  const userPosts = posts.filter((item) => item.uid === uid);

  const onLogout = () => dispatch(logout());

  const commentsNumber = (postId) =>
    comments.filter((item) => item.postId === postId).length;

  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/images/3060bf968d92368179ce26a756ce4271.jpg')}
    >
      <View style={styles.container}>
        <View style={styles.inner}>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={onLogout}
            activeOpacity={0.8}
          >
            <Feather name="log-out" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <AddUserAvatar avatar={avatar} />
          <Text style={styles.title}>{name}</Text>
          <View style={styles.list}>
            <FlatList
              data={userPosts}
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
      </View>
    </ImageBackground>
  );
}
