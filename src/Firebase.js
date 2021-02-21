import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyBQ_1Gu-fSvGN1HIhEyNKNJdvxHGxZlNZs',
  authDomain: 'clone-a31e8.firebaseapp.com',
  projectId: 'clone-a31e8',
  storageBucket: 'clone-a31e8.appspot.com',
  messagingSenderId: '1061406631788',
  appId: '1:1061406631788:web:e985f8dd4a1883b2943549',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
