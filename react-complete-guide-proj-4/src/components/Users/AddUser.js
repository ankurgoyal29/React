import { React, useState } from "react";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
const FormInput = (props) => {
  const [formInputs, setformInputs] = useState({
    username: "",
    age: "",
  });
  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      formInputs.username.trim().length === 0 ||
      formInputs.age.trim().length === 0
    ) {
      return props.emptyData();
    }
    if (+formInputs.age < 1) {
      //Adding + to ensure that its a number
      return props.ageError();
    }

    const newUser = {
      username: formInputs.username,
      age: formInputs.age,
    };
    props.addUser(newUser);

    setformInputs(() => {
      return { username: "", age: "" };
    });
  };

  const userNameChangeHandler = (event) => {
    setformInputs((prevEvent) => {
      return { username: event.target.value, age: prevEvent.age };
    });
  };

  const ageChangeHandler = (event) => {
    setformInputs((prevEvent) => {
      return { username: prevEvent.username, age: event.target.value };
    });
  };

  return (
    <Card>
      <div className={styles["form-input"]}>
        <form onSubmit={addUserHandler}>
          <label>UserName</label>
          <input
            id="username"
            type="text"
            value={formInputs.username}
            onChange={userNameChangeHandler}
          ></input>
          <label>Age (Years)</label>
          <input
            id="age"
            type="number"
            step="1"
            value={formInputs.age}
            onChange={ageChangeHandler}
          ></input>
          <Button type={"submit"} title={"Add User"}></Button>
        </form>
      </div>
    </Card>
  );
};

export default FormInput;
