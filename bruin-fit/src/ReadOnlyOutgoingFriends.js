import React from 'react';


const ReadOnlyOutgoingFriends = ({ entry, handleDeleteClick, handleAddFormSubmit }) => {
        
      

    return (
        <tr>
            <td> {entry.friendName} </td>
            <td>
           
       
                <button type="button" onClick={() => handleDeleteClick(entry.id)}>
                    Remove
                </button>
                
            </td>
        </tr>
    )
}

export default ReadOnlyOutgoingFriends