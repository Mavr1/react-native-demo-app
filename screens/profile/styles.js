import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover' },

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    marginTop: 150,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  inner: { marginHorizontal: 16 },

  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    textAlign: 'center',
    color: '#212121',
    marginVertical: 32,
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

  buttonBack: { alignSelf: 'flex-end', marginTop: 24 },
});
