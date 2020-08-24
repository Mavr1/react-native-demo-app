import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { styles } from './styles';
import { register } from '../../redux/auth/authOperations';
import AddUserAvatar from '../../components/addUserAvatar/AddUserAvatar';

export default function RegistrationScreen({ navigation }) {
  const [login, setLogin] = useState({ value: '', isFocused: false });
  const [email, setEmail] = useState({ value: '', isFocused: false });
  const [password, setPassword] = useState({ value: '', isFocused: false });
  const [avatar, setAvatar] = useState('');
  const [isPassordShown, setIsPassordShown] = useState(false);

  const loginHandler = (text) => setLogin({ ...login, value: text });
  const emailHandler = (text) => setEmail({ ...email, value: text });
  const passwordHandler = (text) => setPassword({ ...password, value: text });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(register(login.value, email.value, password.value, avatar));
    loginHandler('');
    emailHandler('');
    passwordHandler('');
    setAvatar('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        style={styles.background}
        source={require('../../assets/images/3060bf968d92368179ce26a756ce4271.jpg')}
      >
        <KeyboardAvoidingView
          style={{ flex: 1, justifyContent: 'flex-end' }}
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
          <View
            style={{
              flex: 0.76,
              backgroundColor: '#fff',
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }}
          >
            <View style={styles.innerWrapper}>
              <AddUserAvatar avatar={avatar} setAvatar={setAvatar} />
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
                  style={styles.buttonShowPassword}
                  onPress={() => setIsPassordShown(!isPassordShown)}
                  activeOpacity={0.6}
                >
                  <Text style={styles.buttonShowPasswordTitle}>
                    {isPassordShown ? 'Скрыть' : 'Показать'}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.buttonSubmit}
                onPress={onSubmit}
                activeOpacity={0.4}
              >
                <Text style={styles.buttonSubmitTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonLogin}
                onPress={() => navigation.navigate('Login')}
                activeOpacity={0.6}
              >
                <Text style={styles.buttonShowPasswordTitle}>
                  Уже есть аккаунт? Войти
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
