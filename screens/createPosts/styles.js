import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  inner: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  addPhotoContainer: { marginHorizontal: 16, marginBottom: 48 },

  photoContainer: {
    height: 240,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 32,
  },

  addPhotoIconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
  },

  uploadPhotoDescription: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#BDBDBD',
    marginTop: 8,
  },

  publishContainer: {
    marginHorizontal: 16,
  },

  postDescriptionInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },

  postLocationInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    flexDirection: 'row',
    marginTop: 32,
  },

  postInputIcon: { marginRight: 8 },

  postInputText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    marginBottom: 14,
  },

  postInputTextLocation: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    marginBottom: 14,
    flex: 1,
  },

  buttonPublish: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    height: 52,
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
  },

  buttonPublishTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#BDBDBD',
  },

  deletePostButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    width: 70,
    height: 40,
    marginTop: 20,
  },
});
