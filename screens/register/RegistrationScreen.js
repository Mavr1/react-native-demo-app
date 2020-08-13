import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { styles } from '../login/styles';

export default function RegistrationScreen({ navigation }) {
  const [login, setLogin] = useState({ value: '', isFocused: false });
  const [email, setEmail] = useState({ value: '', isFocused: false });
  const [password, setPassword] = useState({ value: '', isFocused: false });
  const [isPassordShown, setIsPassordShown] = useState(false);

  const loginHandler = (text) => setLogin({ ...login, value: text });
  const emailHandler = (text) => setEmail({ ...email, value: text });
  const passwordHandler = (text) => setPassword({ ...password, value: text });

  const onRegister = () => {
    console.log('login :>> ', login.value);
    console.log('email :>> ', email.value);
    console.log('password :>> ', password.value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require('../../assets/images/3060bf968d92368179ce26a756ce4271.jpg')}
        >
          <KeyboardAvoidingView
            style={styles.signInContainer}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
            <View style={styles.userAvatarContainer}>
              <Image
                source={{ uri: 'https://reactjs.org/logo-og.png' }}
                style={styles.userAvatar}
              />
              <View style={styles.userAvatarAddButton}>
                <Text style={styles.userAvatarAddButtonText}>+</Text>
              </View>
            </View>
            <View style={styles.innerWrapper}>
              <Text style={styles.title}>Регистрация</Text>
              <TextInput
                value={login.value}
                onFocus={() => setLogin({ ...login, isFocused: true })}
                onBlur={() => setLogin({ ...login, isFocused: false })}
                onChangeText={loginHandler}
                placeholder="Логин"
                style={login.isFocused ? styles.inputFocused : styles.input}
              />
              <TextInput
                value={email.value}
                onFocus={() => setEmail({ ...email, isFocused: true })}
                onBlur={() => setEmail({ ...email, isFocused: false })}
                onChangeText={emailHandler}
                placeholder="Адрес электронной почты"
                style={email.isFocused ? styles.inputFocused : styles.input}
              />
              <View
                style={password.isFocused ? styles.inputFocused : styles.input}
              >
                <TextInput
                  value={password.value}
                  onFocus={() => setPassword({ ...password, isFocused: true })}
                  onBlur={() => setPassword({ ...password, isFocused: false })}
                  onChangeText={passwordHandler}
                  placeholder="Пароль"
                  secureTextEntry={isPassordShown ? false : true}
                  style={{ fontSize: 16, flex: 1 }}
                />
                <TouchableOpacity
                  style={styles.buttonLogin}
                  onPress={() => setIsPassordShown(!isPassordShown)}
                  activeOpacity={0.6}
                >
                  <Text style={styles.buttonLoginText}>
                    {isPassordShown ? 'Скрыть' : 'Показать'}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.buttonRegister}
                onPress={onRegister}
                activeOpacity={0.4}
              >
                <Text style={styles.buttonRegisterTitle}>
                  Зарегистрироваться
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonLogin}
                onPress={() => navigation.navigate('Login')}
                activeOpacity={0.6}
              >
                <Text style={styles.buttonLoginText}>
                  Уже есть аккаунт? Войти
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
