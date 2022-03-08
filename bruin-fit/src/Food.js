import React, { useState, Fragment } from 'react';
import './App.css';
import data from "./mock-data.json";
import { nanoid } from 'nanoid';
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';
import './Food.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import {
    collection,
    addDoc,
    doc, 
    setDoc
  } from "firebase/firestore";
import { async } from '@firebase/util';



function Food() {
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
       date: '',
       food: '',
       calories: '',

    });

    const [editFormData, setEditFormData] = useState({
        date: '',
       food: '',
       calories: '',
    });

    const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);

    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('date');
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = async(event) => {
        event.preventDefault();

        const newContact = {
            id: nanoid(),
            date: addFormData.date,
            food: addFormData.food,
            calories: addFormData.calories,

        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);

        //Firebase stuff

        try {

            await addDoc(collection(db, "users", user.email, "data", "food", addFormData.date), {
              foodName: addFormData.food,
              calories: addFormData.calories,
            });
        
          } catch (err) {
            console.error(err);
            alert(err.message);
          }
        
    };

    


    const handleEditClick  = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            date: contact.date,
            food: contact.food,
            calories: contact.calories,

        };

        setEditFormData(formValues);
    };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];
    
        const index = contacts.findIndex((contact) => contact.id === contactId);
    
        newContacts.splice(index, 1);
    
        setContacts(newContacts);
      };


    const [user, loading, error] = useAuthState(auth);

    

    return(
        
        <div className= "app-container">
            <h1>Food Tracking Table</h1>
            <h4>Search Date:</h4>
            <form onSubmit= {handleAddFormSubmit}>
                <input 
                    type = "text" 
                    name = "date" 
                    required = "required" 
                    placeholder = "Enter date (MM/DD/YY)"
                    
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
                    {contacts.map((contact) => (
                        <Fragment>
                            { editContactId === contact.id ? (
                            <EditableRow 
                            editformData = {editFormData} 
                            handleEditformChange = {handleEditFormChange}
                            />
                            ) : ( 
                            <ReadOnlyRow 
                            contact = {contact} 
                            handleEditClick = {handleEditClick}
                            handleDeleteClick={handleDeleteClick}
                            />) }

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
