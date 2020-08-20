import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    paddingTop: 32,
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
