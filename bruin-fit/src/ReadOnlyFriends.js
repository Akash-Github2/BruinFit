import React from 'react';
import { useNavigate } from 'react-router';




const ReadOnlyFriends = ({ contact, handleDeleteClick }) => {
    

        let navigate = useNavigate();
        function handleClick() {
          navigate('/profile')
        }
        
      

    return (
        <tr>
            <td> {contact.username} </td>
            <td>
                <button type="button" onClick={() => handleDeleteClick(contact.id)}>
                    Unadd
                </button>

                <button onClick={handleClick}>Profile</button>
                
            </td>
        </tr>
    )
}

export default ReadOnlyFriends