import React from 'react'


const ReadOnlyRowFit = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td> {contact.date} </td>
            <td> {contact.exercise} </td>
            <td> {contact.time}</td>
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

export default ReadOnlyRowFit