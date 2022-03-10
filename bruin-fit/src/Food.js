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


  const [day, setDay] = useState('');
  const [year, setYear] = useState(''); 
  const [month, setMonth] = useState('');


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
            <h2>Search Date:</h2>
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
    
            <form onSubmit= {handleAddFormSubmit}>
            <div className="create">

<form>
        <label className = 'date'>Date:</label> 
        <select
            value={month}
            onChange={(e) => setMonth(e.target.value)} >
            <option value="01"> 01 </option>
            <option value="02"> 02 </option>
            <option value="03"> 03 </option>
            <option value="04"> 04 </option>
            <option value="05"> 05 </option>
            <option value="06"> 06 </option>
            <option value="07"> 07 </option>
            <option value="08"> 08 </option>
            <option value="09"> 09 </option>
            <option value="10"> 10 </option>
            <option value="11"> 11 </option>
            <option value="12"> 12 </option>
        </select>
<select
    value={day}
    onChange={(e) => setDay(e.target.day)}
>
    <option value="01"> 01 </option>
    <option value="02"> 02 </option>
    <option value="03"> 03 </option>
    <option value="04"> 04 </option>
    <option value="05"> 05 </option>
    <option value="06"> 06 </option>
    <option value="07"> 07 </option>
    <option value="08"> 08 </option>
    <option value="09"> 09 </option>
    <option value="10"> 10 </option>
    <option value="11"> 11 </option>
    <option value="12"> 12 </option>
    <option value="13"> 13 </option>
    <option value="14"> 14 </option>
    <option value="15"> 15 </option>
    <option value="16"> 16 </option>
    <option value="17"> 17 </option>
    <option value="18"> 18 </option>
    <option value="19"> 19 </option>
    <option value="20"> 20 </option>
    <option value="21"> 21 </option>
    <option value="22"> 22 </option>
    <option value="23"> 23 </option>
    <option value="24"> 24 </option>
    <option value="25"> 25 </option>
    <option value="26"> 26 </option>
    <option value="27"> 27 </option>
    <option value="28"> 28 </option>
    <option value="29"> 29 </option>
    <option value="30"> 30 </option>
    <option value="31"> 31 </option>

</select>


<select
    value={year}
    onChange={(e) => setYear(e.target.value)} >
    <option year="2023"> 2023 </option>
    <option year="2022"> 2022 </option>
    <option year="2021"> 2021 </option>
    <option year="2020"> 2020 </option>
    <option year="2019"> 2019 </option>
    <option year="2018"> 2018 </option>
    <option year="2017"> 2017 </option>
    <option year="2016"> 2016 </option>
    <option year="2015"> 2015 </option>
    <option year="2014"> 2014 </option>
    <option year="2013"> 2013 </option>
    <option year="2012"> 2012 </option>
    <option year="2011"> 2011 </option>
    <option year="2010"> 2010 </option>
    <option year="2009"> 2009 </option>
    <option year="2008"> 2008 </option>
    <option year="2007"> 2007 </option>
    <option year="2006"> 2006 </option>
    <option year="2005"> 2005 </option>
    <option year="2004"> 2004 </option>
    <option year="2003"> 2004 </option>
    <option year="2002"> 2002 </option>
    <option year="2001"> 2001 </option>
    <option year="2000"> 2000 </option>

</select>
</form>



</div>


              
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
               
                <button type= "submit">Add Food</button>
            </form>
           
        </div>
  
    )
}

export default Food;
