import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native';

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
            <View style={styles.userAvatar}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  background: { flex: 1, resizeMode: 'cover', justifyContent: 'flex-end' },

  signInContainer: {
    position: 'relative',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 92,
    paddingBottom: 78,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  innerWrapper: { marginHorizontal: 16 },

  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    textAlign: 'center',
    color: '#212121',
    marginBottom: 32,
  },

  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#BDBDBD',
  },

  inputFocused: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FF6C00',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#000',
  },

  userAvatar: {
    position: 'absolute',
    top: -60,
    left: '50%',
    transform: [{ translateX: -60 }],
    width: 120,
    height: 120,
    backgroundColor: '#f6f6f6',
    borderRadius: 16,
  },

  userAvatarAddButton: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FF6C00',
    position: 'absolute',
    bottom: 26,
    right: -12,
  },

  userAvatarAddButtonText: {
    color: '#FF6C00',
    fontSize: 26,
    fontFamily: 'Roboto-Thin',
  },

  buttonRegister: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    height: 50,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    marginTop: 42,
    marginBottom: 16,
  },

  buttonRegisterTitle: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Roboto-Regular',
  },

  buttonLoginText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    textAlign: 'center',
    color: '#1B4371',
  },
});
