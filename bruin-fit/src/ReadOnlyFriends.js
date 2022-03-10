import React from "react";
import { useNavigate } from "react-router";

const ReadOnlyFriends = ({ entry, handleRemoveFriendClicked }) => {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/profile");
  }

  return (
    <tr>
      <td> {entry["email"]} </td>
      <td>
        <button type="button" onClick={() => handleRemoveFriendClicked(entry)}>
          Remove
        </button>

        <button onClick={handleClick}>Profile</button>
      </td>
    </tr>
  );
};

export default ReadOnlyFriends;
