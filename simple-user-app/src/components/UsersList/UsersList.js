import React from "react";
import Card from "../UI/Card/Card";
import UserItem from "./UserItem";

import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
