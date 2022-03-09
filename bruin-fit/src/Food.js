import React, { useState, Fragment, useEffect } from 'react';
import './App.css';
import ReadOnlyRow from './components/ReadOnlyRow';
import './Food.css';
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

function Food() {

    const [addFormData, setAddFormData] = useState({
       date: '',
       food: '',
       calories: '',
    });

    const [dateFilter, setDateFilter] = useState("");

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);

    };

    const handleSetDateFilterChange = (event) => {
        event.preventDefault();
        setDateFilter(event.target.value);
    };

    const handleAddFormSubmit = async(event) => {
        event.preventDefault();

        //Firebase stuff
        try {
            console.log(addFormData.food);
            console.log(addFormData.calories);
            console.log(addFormData.date);
            await addDoc(collection(db, "users", user.email, "food"), {
              foodName: addFormData.food,
              calories: addFormData.calories,
              date: addFormData.date
            });
        
          } catch (err) {
            console.error(err);
            alert(err.message);
          }

          const querySnapshot = await getDocs(collection(db, "users", user.email, "food"));
            const saveFirebaseTodos = [];
            querySnapshot.forEach((doc) => {
                const tempMap = doc.data();
                tempMap["id"] = doc.id;
                saveFirebaseTodos.push(tempMap);
            });

            setFoodItems(saveFirebaseTodos);
        
    };

    const handleFilter = async(event) => {
        event.preventDefault();
        
        //Firebase stuff
        const querySnapshot = await getDocs(collection(db, "users", user.email, "food"));
        const saveFirebaseTodos = [];
        querySnapshot.forEach((doc) => {
            const tempMap = doc.data();
            tempMap["id"] = doc.id;
            if (tempMap["date"].includes(dateFilter)) {
                saveFirebaseTodos.push(tempMap);
            }
        });

        setFoodItems(saveFirebaseTodos);
    };

    const handleDeleteClick = async(entryID) => {
        if (auth.currentUser) {
            await deleteDoc(doc(db, "users", user.email, "food", entryID));
        }

        const querySnapshot = await getDocs(collection(db, "users", user.email, "food"));
            const saveFirebaseTodos = [];
            querySnapshot.forEach((doc) => {
                const tempMap = doc.data();
                tempMap["id"] = doc.id;
                saveFirebaseTodos.push(tempMap);
            });

            setFoodItems(saveFirebaseTodos);
      };


    const [user, loading, error] = useAuthState(auth);
    const [foodItems,setFoodItems] = useState([]);

    const fetchFoodItems=async()=>{
        if (auth.currentUser) {
            
            const querySnapshot = await getDocs(collection(db, "users", user.email, "food"));
            const saveFirebaseTodos = [];
            querySnapshot.forEach((doc) => {
                const tempMap = doc.data();
                tempMap["id"] = doc.id;
                console.log(doc.id, " => ", doc.data());
                saveFirebaseTodos.push(tempMap);
            });

            setFoodItems(saveFirebaseTodos);
            
            console.log("Food Items");
            console.log(foodItems); 
        }
    }

    useEffect(() => {
        fetchFoodItems();
    }, [loading]);
    

    return(
        
        <div className= "app-container">
            <h1>Email: { auth.currentUser ? user.email : ""} </h1>
            <h1>Food Tracking Table</h1>
            <h4>Search Date:</h4>
            <form onSubmit= {handleFilter}>
                <input 
                    type = "text" 
                    name = "dateFilter" 
                    placeholder = "Enter date (MM-DD-YY)"
                    onChange={handleSetDateFilterChange}
                    
                />
                
               
                <button type= "submit">Search</button>
            </form>
           
            <form>
            <table>
                <thead>
                    <tr>
                        <th> Date </th>
                        <th> Food </th>
                        <th> Calories </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {foodItems.map((foodItem) => (
                        <Fragment key={foodItem.id}>
                            <ReadOnlyRow 
                            entry = {foodItem} 
                            handleDeleteClick={handleDeleteClick}
                            />
                        
                        </Fragment>
                        
                    ))}
                </tbody>
            </table>
            </form>
            <h2> Add a Food</h2>
            <form onSubmit= {handleAddFormSubmit}>
                <input 
                    type = "text" 
                    name = "date" 
                    required = "required" 
                    placeholder = "Enter date (MM-DD-YY)"
                    onChange = {handleAddFormChange}
                />
                <input 
                    type = "text" 
                    name = "food" 
                    required = "required" 
                    placeholder = "Enter food"
                    onChange = {handleAddFormChange}
                />
                <input 
                    type = "text" 
                    name = "calories" 
                    required = "required" 
                    placeholder = "Enter calories"
                    onChange = {handleAddFormChange}
                />
               
                <button type= "submit">Add</button>
            </form>
           
        </div>
  
    )
}

export default Food;
