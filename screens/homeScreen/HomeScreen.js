import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import CreatePostsScreen from '../createPostsScreen/CreatePostsScreen';
import PostsScreen from '../postsScreen/PostsScreen';

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
  );
}

const Tabs = createBottomTabNavigator();

export default function HomeScreen() {
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
      <Tabs.Screen name="Posts" component={PostsScreen} />
      <Tabs.Screen name="AddPost" component={CreatePostsScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
}
