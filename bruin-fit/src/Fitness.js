import React, { useState, Fragment, useEffect } from "react";
import "./App.css";
import ReadOnlyRowFit from "./ReadOnlyRowFit";
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

function Fitness() {
  const [addFormData, setAddFormData] = useState({
    date: "",
    exercise: "",
    time: "",
    calories: "",
  });
  const [dateFilter, setDateFilter] = useState("");

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleSetDateFilterChange = (event) => {
    event.preventDefault();
    setDateFilter(event.target.value);
  };

  const handleAddFormSubmit = async (event) => {
    event.preventDefault();

    //Firebase stuff

    try {
      await addDoc(collection(db, "users", user.email, "fitness"), {
        exercise: addFormData.exercise,
        time: addFormData.time,
        calories: addFormData.calories,
        date: addFormData.date,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }

    const querySnapshot = await getDocs(
      collection(db, "users", user.email, "fitness")
    );
    const saveFirebaseTodos = [];
    querySnapshot.forEach((doc) => {
      const tempMap = doc.data();
      tempMap["id"] = doc.id;
      saveFirebaseTodos.push(tempMap);
    });

    setFitnessItems(saveFirebaseTodos);
  };

  const handleFilter = async (event) => {
    event.preventDefault();

    //Firebase stuff
    const querySnapshot = await getDocs(
      collection(db, "users", user.email, "fitness")
    );
    const saveFirebaseTodos = [];
    querySnapshot.forEach((doc) => {
      const tempMap = doc.data();
      tempMap["id"] = doc.id;
      if (tempMap["date"].includes(dateFilter)) {
        saveFirebaseTodos.push(tempMap);
      }
    });

    setFitnessItems(saveFirebaseTodos);
  };

  const handleDeleteClick = async (entryID) => {
    if (auth.currentUser) {
      await deleteDoc(doc(db, "users", user.email, "fitness", entryID));
    }

    const querySnapshot = await getDocs(
      collection(db, "users", user.email, "fitness")
    );
    const saveFirebaseTodos = [];
    querySnapshot.forEach((doc) => {
      const tempMap = doc.data();
      tempMap["id"] = doc.id;
      saveFirebaseTodos.push(tempMap);
    });

    setFitnessItems(saveFirebaseTodos);
  };

  const [user, loading, error] = useAuthState(auth);
  const [fitnessItems, setFitnessItems] = useState([]);

  const fetchFitnessItems = async () => {
    if (auth.currentUser) {
      const querySnapshot = await getDocs(
        collection(db, "users", user.email, "fitness")
      );
      const saveFirebaseTodos = [];
      querySnapshot.forEach((doc) => {
        const tempMap = doc.data();
        tempMap["id"] = doc.id;
        console.log(doc.id, " => ", doc.data());
        saveFirebaseTodos.push(tempMap);
      });

      setFitnessItems(saveFirebaseTodos);
    }
  };

  useEffect(() => {
    fetchFitnessItems();
  }, [loading]);

  return (
    <div className="app-container">
      <h1>Fitness Tracking Table</h1>
      <h2>Search Date:</h2>
      <form onSubmit={handleFilter}>
        <input
          type="text"
          name="date"
          placeholder="Filter date (MM-DD-YY)"
          onChange={handleSetDateFilterChange}
        />

        <button type="submit">Search</button>
      </form>
      <form>
        <table>
          <thead>
            <tr>
              <th> Date </th>
              <th> Exercise </th>
              <th> Time </th>
              <th> Calories </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fitnessItems.map((fitnessItem) => (
              <Fragment key={fitnessItem.id}>
                <ReadOnlyRowFit
                  entry={fitnessItem}
                  handleDeleteClick={handleDeleteClick}
                />
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <h2> Add an Exercise</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="date"
          required="required"
          placeholder="Date (MM-DD-YY)"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="exercise"
          required="required"
          placeholder="Exercise"
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="time"
          required="required"
          placeholder="Time (min)"
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="calories"
          required="required"
          placeholder="Calories burned"
          onChange={handleAddFormChange}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Fitness;
