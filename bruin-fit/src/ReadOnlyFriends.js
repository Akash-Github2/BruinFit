import React from 'react';
import { useNavigate } from 'react-router';




const ReadOnlyFriends = ({ entry, handleDeleteClick }) => {
    

        let navigate = useNavigate();
        function handleClick() {
          navigate('/profile')
        }
        
      

    return (
        <tr>
            <td> {entry.friendName} </td>
            <td>
                <button type="button" onClick={() => handleDeleteClick(entry.id)}>
                    Unadd
                </button>

                <button onClick={handleClick}>Profile</button>
                
            </td>
        </tr>
    )
}

export default ReadOnlyFriends