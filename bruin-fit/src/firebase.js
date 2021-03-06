// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzHUFpBIuR_eTWKTDJchABAOYWvLAMhwA",
  authDomain: "bruinfit-30265.firebaseapp.com",
  projectId: "bruinfit-30265",
  storageBucket: "bruinfit-30265.appspot.com",
  messagingSenderId: "490224344152",
  appId: "1:490224344152:web:25708983205e3ca5fefe2d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (
  firstName,
  lastName,
  email,
  password,
  age,
  height,
  weight,
  weightGoal,
  calorieGoal
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    // await addDoc(collection(db, "users"), {
    //   uid: user.uid,
    //   name,
    //   email,
    // });

    await setDoc(doc(db, "users", email), {
      uid: user.uid,
      firstName: firstName,
      lastName: lastName,
      age: age,
      height: height,
      weight: weight,
      weightGoal: weightGoal,
      calorieGoal: calorieGoal,
      bio: "",
    });

    // await setDoc(doc(db, "users", email, "data", "food"), { });
    // await setDoc(doc(db, "users", email, "data", "fitness"), { });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};
