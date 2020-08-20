import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import CreatePostsScreen from '../createPosts/CreatePostsScreen';
import PostsScreen from '../posts/PostsScreen';
import ProfileScreen from '../profile/ProfileScreen';

const Tabs = createBottomTabNavigator();

export default function HomeScreen({ setIsHeaderShown, setHeaderTitle }) {
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let design = '';

          switch (route.name) {
            case 'Posts':
              design = 'AntDesign';
              iconName = focused ? 'appstore1' : 'appstore-o';
              break;

            case 'AddPost':
              design = 'Ionicons';
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
              break;

            case 'Profile':
              design = 'FontAwesome';
              iconName = focused ? 'user' : 'user-o';
              break;
          }

          const components = {
            AntDesign: () => (
              <AntDesign name={iconName} size={size} color={color} />
            ),
            Ionicons: () => (
              <Ionicons name={iconName} size={size} color={color} />
            ),
            FontAwesome: () => (
              <FontAwesome name={iconName} size={size} color={color} />
            ),
          };
          return components[design]();
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name="Posts">
        {(props) => (
          <PostsScreen
            {...props}
            setIsHeaderShown={setIsHeaderShown}
            setHeaderTitle={setHeaderTitle}
          />
        )}
      </Tabs.Screen>
      <Tabs.Screen name="AddPost">
        {(props) => (
          <CreatePostsScreen
            {...props}
            setIsHeaderShown={setIsHeaderShown}
            setHeaderTitle={setHeaderTitle}
          />
        )}
      </Tabs.Screen>
      <Tabs.Screen name="Profile">
        {(props) => (
          <ProfileScreen
            {...props}
            setIsHeaderShown={setIsHeaderShown}
            setHeaderTitle={setHeaderTitle}
          />
        )}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}
