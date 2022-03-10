import React, { useState, Fragment, useEffect } from "react";
import ReadOnlyFriends from "./ReadOnlyFriends";
import ReadOnlyIncomingFriends from "./ReadOnlyIncomingFriends";
import ReadOnlyOutgoingFriends from "./ReadOnlyOutgoingFriends";
import "./Fitness.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import {
  collection,
  addDoc,
  doc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

//creating a friendslist
function Friends() {
  const [formData, setFormData] = useState({
    friendEmail: "",
    actions: "",
    outgoing: "",
    incoming: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...formData };
    newFormData[fieldName] = fieldValue;
    setFormData(newFormData);
  };

  const handleSendFriendRequest = async (event) => {
    event.preventDefault();

    //Firebase stuff
    try {
      console.log(formData.friendEmail);
      var friendIsValid = false;

      //Check if user is valid before adding them
      const querySnapshotUsers = await getDocs(collection(db, "users"));
      querySnapshotUsers.forEach((doc) => {
        if (doc.id === formData.friendEmail) {
          friendIsValid = true;
          return;
        }
      });
      if (!friendIsValid) {
        return;
      }

      await addDoc(
        collection(db, "users", user.email, "outgoingFriendRequests"),
        {
          email: formData.friendEmail,
        }
      );
      await addDoc(
        collection(db, "users", formData.friendEmail, "incomingFriendRequests"),
        {
          email: user.email,
        }
      );
    } catch (err) {
      console.error(err);
      alert(err.message);
    }

    //Update friends section on page
    fetchOutgoingFriendReqItems();
  };

  //Friends Section
  //This function works
  const handleRemoveFriendClicked = async (entry) => {
    //entry is relate to curr's friend (entry map)
    if (auth.currentUser) {
      await deleteDoc(doc(db, "users", user.email, "friends", entry["id"]));

      //Delete current user from ex-friend's friends section too
      var idToDel = "";
      const querySnapshotUsers = await getDocs(
        collection(db, "users", entry["email"], "friends")
      );
      querySnapshotUsers.forEach((doc) => {
        if (doc.data()["email"] === user.email) {
          idToDel = doc.id;
          return;
        }
      });

      await deleteDoc(doc(db, "users", entry["email"], "friends", idToDel));
    }

    fetchFriendsItems();
  };

  //Incoming Friend Request Section
  const handleDeclineClicked = async (entry) => {
    //entry is relate to curr's friend (the person sending the request to u)
    if (auth.currentUser) {
      await deleteDoc(
        doc(db, "users", user.email, "incomingFriendRequests", entry["id"])
      );

      //Delete current user from ex-friend's friends section too
      var idToDel = "";
      const querySnapshotUsers = await getDocs(
        collection(db, "users", entry["email"], "outgoingFriendRequests")
      );
      querySnapshotUsers.forEach((doc) => {
        if (doc.data()["email"] === user.email) {
          idToDel = doc.id;
          return;
        }
      });

      await deleteDoc(
        doc(db, "users", entry["email"], "outgoingFriendRequests", idToDel)
      );
    }

    fetchIncomingFriendReqItems();
  };

  const handleAcceptClicked = async (entry) => {
    //entry is relate to curr's friend (the person sending the request to u)
    if (auth.currentUser) {
      handleDeclineClicked(entry);
      //Add to friends section on both
      await addDoc(collection(db, "users", user.email, "friends"), {
        email: entry["email"],
      });

      await addDoc(collection(db, "users", entry["email"], "friends"), {
        email: user.email,
      });
    }
    fetchFriendsItems();
    fetchIncomingFriendReqItems();
  };

  //Outgoing Request Section
  const handleRemoveFriendReqClicked = async (entry) => {
    //entry is relate to curr's friend (the person sending the request to u)
    if (auth.currentUser) {
      await deleteDoc(
        doc(db, "users", user.email, "outgoingFriendRequests", entry["id"])
      );

      //Delete current user from ex-friend's friends section too
      var idToDel = "";
      const querySnapshotUsers = await getDocs(
        collection(db, "users", entry["email"], "incomingFriendRequests")
      );
      querySnapshotUsers.forEach((doc) => {
        if (doc.data()["email"] === user.email) {
          idToDel = doc.id;
          return;
        }
      });

      await deleteDoc(
        doc(db, "users", entry["email"], "incomingFriendRequests", idToDel)
      );
    }

    fetchOutgoingFriendReqItems();
  };

  const [user, loading, error] = useAuthState(auth);
  const [friendsItems, setFriendsItems] = useState([]);
  const [outgoingFriendReqItems, setOutgoingFriendReqItems] = useState([]);
  const [incomingFriendReqItems, setIncomingFriendReqItems] = useState([]);

  //Fetch items
  const fetchFriendsItems = async () => {
    if (auth.currentUser) {
      const querySnapshot = await getDocs(
        collection(db, "users", user.email, "friends")
      );
      const saveFirebaseTodos = [];
      querySnapshot.forEach((doc) => {
        const tempMap = doc.data();
        tempMap["id"] = doc.id;
        saveFirebaseTodos.push(tempMap);
      });

      setFriendsItems(saveFirebaseTodos);
    }
  };

  const fetchOutgoingFriendReqItems = async () => {
    if (auth.currentUser) {
      const querySnapshot = await getDocs(
        collection(db, "users", user.email, "outgoingFriendRequests")
      );
      const saveFirebaseTodos = [];
      querySnapshot.forEach((doc) => {
        const tempMap = doc.data();
        tempMap["id"] = doc.id;
        saveFirebaseTodos.push(tempMap);
      });

      setOutgoingFriendReqItems(saveFirebaseTodos);
    }
  };

  const fetchIncomingFriendReqItems = async () => {
    if (auth.currentUser) {
      const querySnapshot = await getDocs(
        collection(db, "users", user.email, "incomingFriendRequests")
      );
      const saveFirebaseTodos = [];
      querySnapshot.forEach((doc) => {
        const tempMap = doc.data();
        tempMap["id"] = doc.id;
        saveFirebaseTodos.push(tempMap);
      });

      setIncomingFriendReqItems(saveFirebaseTodos);
    }
  };

  useEffect(() => {
    fetchFriendsItems();
    fetchOutgoingFriendReqItems();
    fetchIncomingFriendReqItems();
  }, [loading]);

  return (
    <div className="app-container">
      <h1> Welcome to the Friend's Page!</h1>
      <br></br>
      <br></br>
      <h2>Add a Friend</h2>
      <form onSubmit={handleSendFriendRequest}>
        <input
          type="text"
          name="friendEmail"
          required="required"
          placeholder="Enter email"
          onChange={handleAddFormChange}
        />

        <button className="btn btn-success" type="submit">
          Send Request
        </button>
      </form>

      <h2> Your Friends: </h2>

      <form>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Actions </th>
            </tr>
          </thead>
          <tbody>
            {friendsItems.map((friendsItem) => (
              <Fragment>
                <ReadOnlyFriends
                  entry={friendsItem}
                  handleRemoveFriendClicked={handleRemoveFriendClicked}
                />
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <br></br>
      <br></br>
      <br></br>

      <h2> Incoming Requests: </h2>

      <form>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Actions </th>
            </tr>
          </thead>
          <tbody>
            {incomingFriendReqItems.map((incomingFriendReqItem) => (
              <Fragment>
                <ReadOnlyIncomingFriends
                  entry={incomingFriendReqItem}
                  handleAcceptClicked={handleAcceptClicked}
                  handleDeclineClicked={handleDeclineClicked}
                />
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <br></br>
      <br></br>
      <br></br>

      <h2>Outgoing Friend Request</h2>
      <form>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Actions </th>
            </tr>
          </thead>
          <tbody>
            {outgoingFriendReqItems.map((outgoingFriendReqItem) => (
              <Fragment>
                <ReadOnlyOutgoingFriends
                  entry={outgoingFriendReqItem}
                  handleRemoveFriendReqClicked={handleRemoveFriendReqClicked}
                />
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Friends;
