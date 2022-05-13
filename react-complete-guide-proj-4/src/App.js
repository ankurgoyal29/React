import { React, useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import ErrorModal from "./components/UI/ErrorModal";

function App() {
  const [items, setitems] = useState([]);

  const [modalState, setModalstate] = useState(false);

  const [modalData, setModalData] = useState({});

  const addUserHandler = (newUser) => {
    setitems((prev) => {
      const user = { ...newUser, id: prev.length + 1 };

      return [...prev, user];
    });
  };
  const ageErrorHandler = () => {
    setModalData(() => {
      return {
        modalTitle: "Invalid Input",

        bodyText: "Please enter a valid age(> 0)",
      };
    });

    setModalstate(true);
  };

  const emptyDataHandler = () => {
    setModalData({
      modalTitle: "Invalid Input",
      bodyText: "Please enter a valid name and age(non-empty values)",
    });

    setModalstate(true);
  };

  const errorModalClickHandler = () => {
    setModalstate(false);
    setModalData({});
  };

  return (
    <div>
      <AddUser
        addUser={addUserHandler}
        ageError={ageErrorHandler}
        emptyData={emptyDataHandler}
      ></AddUser>
      {items.length > 0 && <UserList items={items}></UserList>}
      {modalState && (
        <ErrorModal
          onClick={errorModalClickHandler}
          data={modalData}
        ></ErrorModal>
      )}
    </div>
  );
}

export default App;
