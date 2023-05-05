import { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import UsersList from "./components/UsersList/UsersList";

function App() {
  const [users, setUsers] = useState([{ id: "1", username: "Vova", age: 26 }]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      const updatedUser = [...prevUsers];
      updatedUser.unshift(user);
      return updatedUser;
    });
  };

  return (
    <>
      <div>
        <section id="user-form">
          <UserInput onAddUser={addUserHandler} />
        </section>
        <section id="users-list">
          <UsersList users={users} />
        </section>
      </div>
    </>
  );
}

export default App;