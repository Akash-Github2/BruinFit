import React from 'react'


const ReadOnlyRow = ({ entry, handleDeleteClick }) => {
    return (
        <tr>
            <td> {entry.date} </td>
            <td> {entry.foodName} </td>
            <td> {entry.calories}</td>
            <td>
                <button type="button" onClick={() => handleDeleteClick(entry.id)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow
