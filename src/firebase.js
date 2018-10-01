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
  messagingSenderId: firebaseKeys.messagingSenderId,
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

// Connecting to Database
const firebaseDB = firebase.database();
firebaseDB
  .ref('matches')
  .once('value')
  .then(snapshot => {
    console.log(snapshot.val());
  });

// Connecting to Firestore
const matchesRef = firestore.collection('matches');
const matches = matchesRef.get().then(snapshot => {
  const items = {};
  snapshot.forEach(doc => {
    items[doc.id] = doc.data();
    console.log(items);
  });
});

// const matchesRef = firestore.collection('matches');
// const matches = matchesRef.get().then(snapshot => {
//   snapshot.forEach(doc => {
//     console.log(doc.id, '=>', doc.data());
//   });
// });
