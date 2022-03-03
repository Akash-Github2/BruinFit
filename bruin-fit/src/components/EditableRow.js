import React from 'react'

const EditableRow = ({editFormData, handleEditFormChange}) => {
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
                placeholder = "Enter food"
                name = "food"
                value = {editFormData.food}
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

export default EditableRow
