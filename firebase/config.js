import * as firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDl8hb4vg0F4vQn3KdpEtbm0DI1x8_xNOU',
  authDomain: 'react-native-first-app-fe99e.firebaseapp.com',
  databaseURL: 'https://react-native-first-app-fe99e.firebaseio.com',
  projectId: 'react-native-first-app-fe99e',
  storageBucket: 'react-native-first-app-fe99e.appspot.com',
  messagingSenderId: '50559655298',
  appId: '1:50559655298:web:16dbb6cd7b3f31100b439b',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
