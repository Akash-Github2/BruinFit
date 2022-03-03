import React from 'react';
// friends component renders each friend
const Friends  = ({friend, removeFriend}) => // friend holds all information about a friend and removeFriend removes a friend frmo their friendslist
{
    return(
        <div>
            <li className ="list-group-item">
                <strong>Name:</strong> {friend.name}
                <br />
                <strong>Age:</strong>{friend.age}
                <button onClick={(e) => {removeFriend(e,friend)}}
                    className="btn btn-danger trash">
                        <span> FaTrash0 /></span>
                    </button>
            </li>
            Friends Page!
            Friends List
        </div>
    )
}





//need a way to add friends


export default Friends;