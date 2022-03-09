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
              onChange={handleEditFormChange}
                />
            </td>
            
        
        </tr>
    )
}

export default EditableRowFriends