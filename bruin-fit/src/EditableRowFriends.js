import React from 'react'

const EditableRowFriends = ({editFormData, handleEditFormChange}) => {
    return (
        <tr>
            <td>
            <input
              type="text"
              name="username"
              required = "required"
              placeholder = "Enter a username"
              onChange={handleAddFormChange}
                />
            </td>
            
        
            <td>
                <button type = "submit">Save</button>
            </td>
        </tr>
    )
}

export default EditableRowFriends