import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  inner: {
    marginHorizontal: 16,
    flex: 1,
    justifyContent: 'flex-end',
  },

  photoContainer: {
    height: 240,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    justifyContent: 'center',
    marginVertical: 32,
  },

  photo: { flex: 1, borderRadius: 8 },

  commentsContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  noComments: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#BDBDBD',
    textAlign: 'center',
  },
});
