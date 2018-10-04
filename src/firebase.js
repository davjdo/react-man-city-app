import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import { firebaseKeys } from './firebaseKeys.js';

const firebaseConfig = {
  apiKey: firebaseKeys.apiKey,
  authDomain: firebaseKeys.authDomain,
  databaseURL: firebaseKeys.databaseURL,
  projectId: firebaseKeys.projectId,
  storageBucket: firebaseKeys.storageBucket,
  messagingSenderId: firebaseKeys.messagingSenderId
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

// Connecting to Database
const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');

// Connecting to Firestore
const firestoreMatches = firestore.collection('matches');
const firestorePromotions = firestore.collection('promotions');

export {
  firebase,
  firebaseMatches,
  firestoreMatches,
  firebasePromotions,
  firestorePromotions
};
