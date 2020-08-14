import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RegistrationScreen from './screens/register/RegistrationScreen';
import LoginScreen from './screens/login/LoginScreen';
import PostsScreen from './screens/postsScreen/PostsScreen';
import HomeScreen from './screens/homeScreen/HomeScreen';

const loadFonts = async () => {
  await Font.loadAsync({
    'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
};

const Stack = createStackNavigator();

export default function App() {
  const [isFontReady, setIsFontReady] = useState(false);

  const handleSignOut = () => console.log('Sign Out');

  if (!isFontReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsFontReady(true)}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        /> */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Публикации',
            headerTitleStyle: {
              alignSelf: 'center',
              transform: [{ translateX: 28 }],
            },
            headerRight: () => (
              <TouchableOpacity
                style={styles.buttonLogout}
                onPress={handleSignOut}
                activeOpacity={0.8}
              >
                <Feather name="log-out" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  buttonLogout: {
    marginRight: 10,
  },
});
