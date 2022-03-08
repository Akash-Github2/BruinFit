import React, {useState, Fragment } from 'react';
//import FriendsList from './FriendsList'
import './Food.css'
import data from "./mock-data-friends.json";
//import ReadOnlyRowFriends from './components/ReadOnlyRow';
//import EditableRowFriends from './components/EditableRow';
//const API_BASE = "http://rest.learncode.academy/api/efa/friends";
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
  
   

/*mountingData()
{
    fetch(API_BASE)
    .then(res =>res.json())
    .then(response => {
        console.log(response)
        this.ListeningStateChangedEvent({friends: response})
    })

}

deleteFriend = (e, friend) => 
{
    fetch('${API_BASE}/${friend.id}', {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(res=>
    {
        let tempFriends = this.state.friends.filter(fr => fr !==friend)
        this.setState({friends: tempFriends})

    })
}

handleSubmit = event => 
{
    event.preventDefault();
    var name = this.refs.name.value;
    var age = this.refs.age.value;
    var friendsTemp = this.state.friends;

    fetch(API_BASE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, age: age })
      })
        .then(res => res.json())
        .then(response => {
          console.log(response)
          friendsTemp.push(response)
          this.setState({ friends: friendsTemp })
          this.refs.name.value = ""
          this.refs.age.value = ""
        })      
}

*/


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
                 <tr>
                   <td> {contact.username}</td> 
                   <td>{contact.actions} 
                   <button className="btn btn-success" type="submit">
          View Profile
          </button>
          </td>
                 </tr>  
                       
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



/*
const Friends = () => 
{
  const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        username: '',

    });

    const handleAddFormChange = (event) => {
      event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    }
}

*/
