import React from "react";
import UserItem from "./UserItem";
import styles from "./UserList.module.css";
import Card from "../UI/Card";
const UserList = (props) => {
  return (
    <Card>
      <div className={styles.users}>
        <ul>
          {props.items.map((item) => {
            return <UserItem key={item.id} data={item}></UserItem>;
          })}
        </ul>
      </div>
    </Card>
  );
};

export default UserList;
