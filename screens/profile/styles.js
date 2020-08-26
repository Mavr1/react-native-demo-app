import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 150,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  inner: { flex: 1, marginHorizontal: 16 },

  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    textAlign: 'center',
    color: '#212121',
    marginVertical: 32,
  },

  buttonBack: { alignSelf: 'flex-end', marginTop: 24 },

  list: { flex: 0.9 },
});
