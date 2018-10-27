import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDv8LPpSyxcnUO0HvNrGp7f7BnO3hSKSm0',
  authDomain: 'star-frontiers.firebaseapp.com',
  databaseURL: 'https://star-frontiers.firebaseio.com',
  projectId: 'star-frontiers',
  storageBucket: 'star-frontiers.appspot.com',
  messagingSenderId: '67792417509'
};

firebase.initializeApp(config);

export default firebase;
