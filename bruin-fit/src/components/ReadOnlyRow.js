import React from 'react'


const ReadOnlyRow = ({ contact, handleEditClick }) => {
    return (
        <tr>
            <td> {contact.date} </td>
            <td> {contact.food} </td>
            <td> {contact.calories}</td>
            <td>
                <button type= "button" onClick={(event) => handleEditClick(event, contact)}
                >
                    Edit
                </button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow
