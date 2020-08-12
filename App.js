import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
  Switch,
} from 'react-native';
import RegistrationScreen from './screens/RegistrationScreen';

export default function App() {
  return <RegistrationScreen />;
}
