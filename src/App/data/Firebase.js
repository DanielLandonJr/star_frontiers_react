// things brings in everything for firebase...and generates a annoying message in console
// import firebase from 'firebase';

// doing this will only bring in parts we want/need...gets rid of the annoying message
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// setup database connection
const config = {
  apiKey: 'AIzaSyDv8LPpSyxcnUO0HvNrGp7f7BnO3hSKSm0',
  authDomain: 'star-frontiers.firebaseapp.com',
  databaseURL: 'https://star-frontiers.firebaseio.com',
  projectId: 'star-frontiers',
  storageBucket: 'star-frontiers.appspot.com',
  messagingSenderId: '67792417509'
};

// initialize connection
firebase.initializeApp(config);

// create database
const FirebaseDataBase = firebase.firestore();

// some database settings
FirebaseDataBase.settings({ timestampsInSnapshots: true });

export default FirebaseDataBase;
