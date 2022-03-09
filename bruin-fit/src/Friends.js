import React, { useState, Fragment, useEffect } from 'react';
import ReadOnlyFriends from './ReadOnlyFriends';
import "./Fitness.css"
import { nanoid } from 'nanoid';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import {
  collection,
  addDoc,
  doc,
  getDocs,
  deleteDoc
} from "firebase/firestore";
import { async } from '@firebase/util';

//creating a friendslist
function Friends() {
    const [addFormData, setAddFormData] = useState({
        friendName: '',
        actions: '',
    });

    const handleAddFormChange = (event) => {
      event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };
  
    const handleAddFormSubmit = async(event) => {
        event.preventDefault();
       
         //Firebase stuff
         try {
          console.log(addFormData.friendName);
          await addDoc(collection(db, "users", user.email, "friends"), {
            friendName: addFormData.friendName
          });
      
        } catch (err) {
          console.error(err);
          alert(err.message);
        }

        const querySnapshot = await getDocs(collection(db, "users", user.email, "friends"));
          const saveFirebaseTodos = [];
          querySnapshot.forEach((doc) => {
              const tempMap = doc.data();
              tempMap["id"] = doc.id;
              saveFirebaseTodos.push(tempMap);
          });

          setFriendsItems(saveFirebaseTodos);

    };

    const handleDeleteClick = async(entryID) => {
      if (auth.currentUser) {
          await deleteDoc(doc(db, "users", user.email, "friends", entryID));
      }

      const querySnapshot = await getDocs(collection(db, "users", user.email, "friends"));
          const saveFirebaseTodos = [];
          querySnapshot.forEach((doc) => {
              const tempMap = doc.data();
              tempMap["id"] = doc.id;
              saveFirebaseTodos.push(tempMap);
          });

          setFriendsItems(saveFirebaseTodos);
    };

  const [user, loading, error] = useAuthState(auth);
  const [friendsItems,setFriendsItems] = useState([]);
  
  const fetchFriendsItems=async()=>{
    if (auth.currentUser) {
        
        const querySnapshot = await getDocs(collection(db, "users", user.email, "friends"));
        const saveFirebaseTodos = [];
        querySnapshot.forEach((doc) => {
            const tempMap = doc.data();
            tempMap["id"] = doc.id;
            console.log(doc.id, " => ", doc.data());
            saveFirebaseTodos.push(tempMap);
        });

        setFriendsItems(saveFirebaseTodos);
        
        console.log("Food Items");
        console.log(friendsItems); 
    }
}

useEffect(() => {
    fetchFriendsItems();
}, [loading]);


  return (
    <div className="app-container">
      
          <h1> Welcome to the Friend's Page!</h1>
          <br></br>
          <br></br>

          <h2>
             Your Friends: 
          </h2>
     
        
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
                          entry = {friendsItem}
                          handleDeleteClick={handleDeleteClick}
                          />

                      </Fragment>
                        
                      ))}

                  </tbody>
            </table>
            </form>


          <h2>Add a Friend</h2>
            <form onSubmit={handleAddFormSubmit}>
            <input
              type="text"
              name="friendName"
              required = "required"
              placeholder = "Enter a username"
              onChange={handleAddFormChange}
                />

            <button className="btn btn-success" type="submit">Add </button>
            </form>
          
          
          <br></br>
          <br></br>
          
      
    </div>
  )
  }


export default Friends;



