import React from 'react'


const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
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
                <button type="button" onClick={() => handleDeleteClick(contact.id)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow
