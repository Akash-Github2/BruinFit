import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyAzHUFpBIuR_eTWKTDJchABAOYWvLAMhwA",
  authDomain: "bruinfit-30265.firebaseapp.com",
  projectId: "bruinfit-30265",
  storageBucket: "bruinfit-30265.appspot.com",
  messagingSenderId: "490224344152",
  appId: "1:490224344152:web:25708983205e3ca5fefe2d"
};

const firebaseApp = firebase.initializeApp(config);
const db = firebase.firestore();
const auth = firebase.auth();
  
export default db;