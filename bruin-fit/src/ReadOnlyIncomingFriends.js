import React from "react";

const ReadOnlyIncomingFriends = ({
  entry,
  handleAcceptClicked,
  handleDeclineClicked,
}) => {
  return (
    <tr>
      <td> {entry["email"]} </td>
      <td>
        <button type="button" onClick={() => handleAcceptClicked(entry)}>
          Accept
        </button>

        <button type="button" onClick={() => handleDeclineClicked(entry)}>
          Decline
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyIncomingFriends;
