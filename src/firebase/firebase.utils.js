import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBxiwe0wNrxIR6QVCSFqmy6hpbw8V9Kuk0",
  authDomain: "crwn-db-c5505.firebaseapp.com",
  databaseURL: "https://crwn-db-c5505.firebaseio.com",
  projectId: "crwn-db-c5505",
  storageBucket: "crwn-db-c5505.appspot.com",
  messagingSenderId: "310089854295",
  appId: "1:310089854295:web:b5e7fb6d542f0adcf66212",
  measurementId: "G-F29GHPBT9P"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;