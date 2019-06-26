import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import * as firebaseSDK from '../../firebaseSDK';

var firebaseConfig = {
  apiKey: firebaseSDK.FIREBASE_API_KEY,
  authDomain: firebaseSDK.FIREBASE_AUTH_DOMAIN,
  databaseURL: firebaseSDK.FIREBASE_DATABASE_URL,
  projectId: firebaseSDK.FIREBASE_PROJECT_ID,
  storageBucket: firebaseSDK.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: firebaseSDK.FIREBASE_MESSAGING_SENDER_ID,
  appId: firebaseSDK.FIREBASE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default }