import React, { useState, Fragment } from 'react';
import './App.css';
import data from "./mock-data.json";
import { nanoid } from 'nanoid';
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';




const Food = () => 
{
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

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: nanoid(),
            date: addFormData.date,
            food: addFormData.food,
            calories: addFormData.calories,

        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);


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



    

    return(
        
        <div className= "app-container">
            <h1>Food Tracking</h1>
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
                    placeholder = "Enter date (MM/DD/YY)"
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
