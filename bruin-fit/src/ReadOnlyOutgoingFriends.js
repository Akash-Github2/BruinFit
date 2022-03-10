import React from "react";

const ReadOnlyOutgoingFriends = ({ entry, handleRemoveFriendReqClicked }) => {
  return (
    <tr>
      <td> {entry["email"]} </td>
      <td>
        <button
          type="button"
          onClick={() => handleRemoveFriendReqClicked(entry)}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyOutgoingFriends;
