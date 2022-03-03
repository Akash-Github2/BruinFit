import React from 'react'

const EditableRowFit = ({editFormData, handleEditFormChange}) => {
    return (
        <tr>
            <td>
                <input type = "text" 
                required = "required" 
                placeholder = "Enter date (MM/DD/YY)"
                name = "date"
                value = {editFormData.date}
                onChange = {handleEditFormChange}
                ></input>
            </td>
            <td>
            <input type = "text" 
                required = "required" 
                placeholder = "Enter exercise"
                name = "exercise"
                value = {editFormData.exercise}
                onChange = {handleEditFormChange}
                ></input>
            </td>
            <td>
            <input type = "text" 
                required = "required" 
                placeholder = "Enter time"
                name = "time"
                value = {editFormData.time}
                onChange = {handleEditFormChange}
                ></input>
            </td>
            <td>
            <input type = "text" 
                required = "required" 
                placeholder = "Enter calories"
                name = "calories"
                value = {editFormData.calories}
                onChange = {handleEditFormChange}
                ></input>
            </td>
            <td>
                <button type = "submit">Save</button>
            </td>
        </tr>
    )
}

export default EditableRowFit