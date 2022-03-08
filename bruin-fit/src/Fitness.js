import React, { useState, Fragment } from 'react';
import './App.css';
import data from "./mock-data-fitness.json";
import { nanoid } from 'nanoid';
import ReadOnlyRowFit from './ReadOnlyRowFit';
import EditableRowFit from './EditableRowFit';
import './Fitness.css';




const Fitness = () => 
{
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
       date: '',
       exercise: '',
       time: '',
       calories: '',

    });

    const [editFormData, setEditFormData] = useState({
        date: '',
       exercise: '',
       time: '',
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
            exercise: addFormData.exercise,
            time: addFormData.time,
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
            exercise: contact.exercise,
            time: contact.time,
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



    

    return(
        
        <div className= "app-container">
            <h1>Fitness Tracking Table</h1>
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
                        <th> Exercise </th>
                        <th> Time </th>
                        <th> Calories </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <Fragment>
                            { editContactId === contact.id ? (
                            <EditableRowFit 
                            editformData = {editFormData} 
                            handleEditformChange = {handleEditFormChange}
                            />
                            ) : ( 
                            <ReadOnlyRowFit
                            contact = {contact} 
                            handleEditClick = {handleEditClick}
                            handleDeleteClick={handleDeleteClick}
                            />) }

                        </Fragment>
                        
                    ))}
                   
                </tbody>
            </table>
            </form>
            <h2> Add an Exercise</h2>
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
                    name = "exercise" 
                    required = "required" 
                    placeholder = "Enter exercise"
                    onChange = {handleAddFormChange}
                />
                <input 
                    type = "text" 
                    name = "time" 
                    required = "required" 
                    placeholder = "Enter time"
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

export default Fitness;
