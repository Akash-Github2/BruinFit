import React, {useState, Fragment } from 'react';
import data from "./mock-data-friends.json";
import ReadOnlyFriends from './ReadOnlyFriends';
import EditableRowFriends from './EditableRowFriends';
import "./Fitness.css"
import { nanoid } from 'nanoid';

//creating a friendslist
const Friends= () => 
{
  const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        username: '',
        actions: '',

    });

    const [editFormData, setEditFormData] = useState({
     username: '',
     actions: '',
  });

  const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
      event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
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
      username: addFormData.username,
      actions: addFormData.actions,
    };

    const newContacts = [...contacts, newContact];
        setContacts(newContacts);

  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact)=> contact.id === contactId);
    newContacts.splice(index, 1)

    setContacts(newContacts);
  }
  
  
   


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
              {contacts.map((contact) => (
                 
                <Fragment>
                            { editContactId === contact.id ? (
                            <EditableRowFriends
                            editformData = {editFormData} 
                            handleEditformChange = {handleEditFormChange}
                            />
                            ) : ( 
                            <ReadOnlyFriends
                            contact = {contact} 
                            handleEditClick = {handleEditClick}
                            handleDeleteClick={handleDeleteClick}
                            
                            />) }

                        </Fragment>
                          
                        ))}

                    </tbody>
            </table>
            </form>


          <h2>Add a Friend</h2>
            <form onSubmit={handleAddFormSubmit}>
            <input
              type="text"
              name="username"
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



