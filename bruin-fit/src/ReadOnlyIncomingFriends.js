import React from 'react';


const ReadOnlyIncomingFriends = ({ entry, handleDeleteClick, handleAddFormSubmit }) => {
        
      

    return (
        <tr>
            <td> {entry.friendName} </td>
            <td>

                <button type="button" onClick={() => handleAddFormSubmit(entry.id)}>
                    Add
                </button>
           
       
                <button type="button" onClick={() => handleDeleteClick(entry.id)}>
                    Deny
                </button>
                
            </td>
        </tr>
    )
}

export default ReadOnlyIncomingFriends