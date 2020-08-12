import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './screens/register/RegistrationScreen';
import LoginScreen from './screens/login/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';

const loadFonts = async () => {
  await Font.loadAsync({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
  });
};

const Stack = createStackNavigator();

export default function App() {
  const [isFontReady, setIsFontReady] = useState(false);

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
      <Stack.Navigator headerMode={'none'} initialRouteName="Registration">
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
