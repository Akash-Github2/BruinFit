import React, { useState, useEffect } from "react";
import "./Profile.css";
import DynamicProfile from "./DynamicProfile";
import StaticProfile from "./StaticProfile";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import {
  collection,
  addDoc,
  doc,
  getDocs,
  deleteDoc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

function defaultName() {
  "Edit Name";
}

function defaultAge() {
  "Edit Age";
}

function defaultWeight() {
  "Edit Weight";
}

function defaultHeight() {
  "Edit Height";
}

function defaultCalorieGoal() {
  "Edit CalorieGoal";
}

function defaultEmail() {
  "Edit Email";
}

function defaultBio() {
  "Edit Bio";
}

function Profile(props) {
  const [editingMode, setEditingMode] = useState(false);

  const [name, setName] = useState(defaultName());

  const [age, setAge] = useState(defaultAge());
  const [email, setEmail] = useState(defaultEmail());
  const [weight, setWeight] = useState(defaultWeight());
  const [height, setHeight] = useState(defaultHeight());
  const [calorieGoal, setCalorieGoal] = useState(defaultCalorieGoal());
  const [bio, setBio] = useState(defaultBio());

  const stored = { name, email, age, weight, height, calorieGoal, bio };

  const [user, loading, error] = useAuthState(auth);

  async function finishEditing(result) {
    console.log("finishEditing", result);
    if (result != null) {
      setAge(result.age);
      setWeight(result.weight);
      setHeight(result.height);
      setCalorieGoal(result.calorieGoal);
      setBio(result.bio);

      await updateDoc(doc(db, "users", user.email), {
        age: result.age,
        weight: result.weight,
        height: result.height,
      });
    }
    setEditingMode(false);
  }

  const fetchProfileItems = async () => {
    if (auth.currentUser) {
      const docRef = await getDoc(doc(db, "users", user.email));

      if (docRef.exists()) {
        console.log("Document data:", docRef.data());
        setAge(docRef.data()["age"]);
        setName(docRef.data()["firstName"] + " " + docRef.data()["lastName"]);
        setHeight(docRef.data()["height"]);
        setWeight(docRef.data()["weight"]);
        setEmail(docRef.id);
      } else {
        console.log("No such document!");
      }
    }
  };

  useEffect(() => {
    fetchProfileItems();
    console.log(props.userEmail != null ? props.userEmail : "");
  }, [loading]);

  return (
    <div className="container">
      <div className="Profile">
        {editingMode ? (
          <>
            <h1>MY PROFILE</h1>
            <DynamicProfile stored={stored} changeFullCall={finishEditing} />
          </>
        ) : (
          <>
            <h1>MY PROFILE</h1>

            <StaticProfile
              stored={stored}
              changeFullCall={() => setEditingMode(true)}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
