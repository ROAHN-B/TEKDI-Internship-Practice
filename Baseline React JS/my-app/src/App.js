import './App.css';
import TodoList from './component/todoList';
import Profile from './component/profile';
import  PackingList from './component/PackagingList';
import List from './component/List';
import React from 'react';
import Student1 from './component/Student';
import Student from './component/Propsexp';
import StateInConstructor from './component/StateInConstructor';
import UsableComponent from './component/UsableComponent';

function App(){
  return (
    <div className="App">
      {/* Rendering our newly imported component */}
      <TodoList />
      <hr />
      <Profile />
      <PackingList />
      <List />
      <Student1 name = "Alice" />
      <Student name="Rohan" roll="50" />
      <StateInConstructor  />
      <UsableComponent number={1} />
      <UsableComponent number={2} />
      <UsableComponent number={3} />
    </div>
  )
} 

export default App;