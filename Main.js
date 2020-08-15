import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RegistrationScreen from './screens/register/RegistrationScreen';
import LoginScreen from './screens/login/LoginScreen';
import HomeScreen from './screens/home/HomeScreen';
import CommentsScreen from './screens/comments/CommentsScreen';
import { logout, getAuthState } from './redux/auth/authOperations';

const loadFonts = async () => {
  await Font.loadAsync({
    'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
};

const Stack = createStackNavigator();

export default function Main() {
  const [isFontReady, setIsFontReady] = useState(false);

  const dispatch = useDispatch();

  const isAuth = Boolean(useSelector((state) => state.auth.uid));

  useEffect(() => {
    dispatch(getAuthState());
    return;
  }, []);

  const handleSignOut = () => dispatch(logout());

  if (!isFontReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsFontReady(true)}
      />
    );
  }

  return (
    <Stack.Navigator initialRouteName="Login">
      {!isAuth && (
        <>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Registration"
            component={RegistrationScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
        </>
      )}
      {isAuth && (
        <>
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
          <Stack.Screen
            name="Comments"
            component={CommentsScreen}
            options={{
              title: 'Комментарии',
              headerTitleStyle: {
                alignSelf: 'center',
                transform: [{ translateX: -28 }],
              },
              headerLeft: () => (
                <TouchableOpacity
                  style={styles.buttonBack}
                  onPress={handleSignOut}
                  activeOpacity={0.8}
                >
                  <MaterialIcons name="arrow-back" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              ),
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  buttonLogout: {
    marginRight: 20,
  },

  buttonBack: {
    marginLeft: 20,
  },
});
