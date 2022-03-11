import React, { useState, useEffect } from "react";
import "./Profile.css";
import DynamicProfile from "./DynamicProfile";
import StaticProfile from "./StaticProfile";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import Group from "./Group";
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

function Profile() {
  const [editingMode, setEditingMode] = useState(false);

  const [name, setName] = useState(defaultName());

  const [age, setAge] = useState(defaultAge());
  const [email, setEmail] = useState(defaultEmail());
  const [weight, setWeight] = useState(defaultWeight());
  const [height, setHeight] = useState(defaultHeight());
  const [calorieGoal, setCalorieGoal] = useState(defaultCalorieGoal());
  const [bio, setBio] = useState(defaultBio());
  const [profileEmail, setProfileEmail] = useState("");
  const [isCurrUser, setIsCurrUser] = useState(true);

  const stored = { name, email, age, weight, height, calorieGoal, bio };

  const [user, loading, error] = useAuthState(auth);

  const buttonStyle = {};

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
        calorieGoal: result.calorieGoal,
        bio: result.bio,
      });
    }
    setEditingMode(false);
  }

  const fetchProfileItems = async () => {
    if (auth.currentUser) {
      const docRef = await getDoc(
        doc(db, "users", profileEmail === "" ? user.email : profileEmail)
      );

      if (docRef.exists()) {
        console.log("Document data:", docRef.data());
        setAge(docRef.data()["age"]);
        setName(docRef.data()["firstName"] + " " + docRef.data()["lastName"]);
        setHeight(docRef.data()["height"]);
        setWeight(docRef.data()["weight"]);
        setCalorieGoal(docRef.data()["calorieGoal"]);
        setEmail(docRef.id);
        setBio(docRef.data()["bio"]);
      } else {
        console.log("No such document!");
      }
    }
  };

  const handleSetProfileEmail = async (event) => {
    event.preventDefault();
    console.log(profileEmail);
    const querySnapshotUsers = await getDocs(
      collection(db, "users", user.email, "friends")
    );
    var tempIsCurrUser = true;
    querySnapshotUsers.forEach((doc) => {
      console.log(doc.data());
      if (doc.data()["email"] === profileEmail) {
        if (event.target.value != user.email) {
          tempIsCurrUser = false;
        }
        return;
      }
    });

    setIsCurrUser(tempIsCurrUser);

    fetchProfileItems();
  };

  useEffect(() => {
    if (auth.currentUser) {
      setProfileEmail(user.email);
      console.log(profileEmail);
      fetchProfileItems();
    }
  }, [loading]);

  return (
    <div className="container">
      <div className="Profile">
        {editingMode ? (
          <>
            <h1>My Profile</h1>
            <DynamicProfile stored={stored} changeFullCall={finishEditing} />
          </>
        ) : (
          <>
            <h1>My Profile</h1>

            <StaticProfile stored={stored} />

            <Group>
              <br />
              {(auth.currentUser ? user.email : "") === profileEmail ||
              profileEmail === "" ? (
                <>
                  <editButton
                    style={buttonStyle}
                    onClick={() => setEditingMode(true)}
                  >
                    Edit Profile
                  </editButton>
                </>
              ) : (
                <></>
              )}
              <br />
              <br />
              <br />
              <br />

              <h2> Search For Other Friends' Profiles!: </h2>

              <br />
              <br />

              <input
                type="text"
                placeholder="Type friend's email"
                onChange={(e) => setProfileEmail(e.target.value)}
              />
              <br />
              <br />
              <searchButton onClick={handleSetProfileEmail} type="submit">
                Search
              </searchButton>
            </Group>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
