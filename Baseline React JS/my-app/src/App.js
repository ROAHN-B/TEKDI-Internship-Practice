import logo from './logo.svg';
import './App.css';
import TodoList from './component/todoList';
import Profile from './component/profile';
import  PackingList from './component/PackagingList';
import List from './component/List';
import React from 'react';
import Student1 from './component/Student';


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
    </div>
  )
} 

export default App;