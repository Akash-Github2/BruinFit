import React from 'react'


const ReadOnlyRowFit = ({ entry, handleDeleteClick }) => {
    return (
        <tr>
            <td> {entry.date} </td>
            <td> {entry.exercise} </td>
            <td> {entry.time}</td>
            <td> {entry.calories}</td>
            <td>
                <button type="button" onClick={() => handleDeleteClick(entry.id)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default ReadOnlyRowFit