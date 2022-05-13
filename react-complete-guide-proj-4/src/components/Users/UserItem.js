import React from "react";

const UserItem = (props) => {
  return (
    <li>
      {props.data.username} ({props.data.age} year old)
    </li>
  );
};

export default UserItem;
