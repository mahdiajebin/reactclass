import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList'

function App() {
  const [usersLists, setUsersList] = useState([]);

  const addUserHandler = (uname, uage) => {
    //add list to append to list; old list and append new element to it, relies on previews state   
    //function state 
    setUsersList((prevUsersList) => {
      //new state snapshot 
      return [...prevUsersList,
      { name: uname, age: uage, id: Math.random().toString() },
      ];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={[usersLists]}/>
    </div>
  );
}

export default App;
