import './App.css';
import TodoList from './component/todoList';
import Profile from './component/profile';
import  PackingList from './component/PackagingList';
import List from './component/List';
import Student1 from './component/Student';
import Student from './component/Propsexp';
import StateInConstructor from './component/StateInConstructor';
import UsableComponent from './component/UsableComponent';
import EventHandler from './component/EventHandler';
import FunctionalEventHandler from './component/FunctionalEventHandler';
import IfStatement from './component/IfStatement';
import Guest from './component/guest';
import React, { Component } from 'react';
import LoginExp from './component/LoginExp';

// function App(){
  
//   return (
//     <div className="App">
//       {/* Rendering our newly imported component */}
//       <TodoList />
//       <hr />
//       <Profile />
//       <PackingList />
//       <List />
//       <Student1 name = "Alice" />
//       <Student name="Rohan" roll="50" />
//       <StateInConstructor  />
//       <UsableComponent number={1} />
//       <UsableComponent number={2} />
//       <UsableComponent number={3} />
//       <FunctionalEventHandler />
//       <EventHandler roll="50" />
      
//     </div>
//   )
// }

export default class App extends Component{
 
    // const isRegistered = this.props.consumer;
    // if (isRegistered){
    //   return <IfStatement />
    // }
    // return <Guest />
    // const primemember = this.props.primemember;
    // if (primemember){
    //   return <IfStatement />
    // }
    // return <Guest />
    state={
      isLoggedIn:false
    };

    clickLogin = () =>{
      this.setState({isLoggedIn:true});
    }
    clickLogout = () =>{
      this.setState({isLoggedout:false});
    }

    render(){
      const isLoggedIn = this.state.isLoggedIn;
      return (
        <div>
        {isLoggedIn ? <LoginExp name="Rohan" clickData={this.clickLogout} /> : <Guest clickData={this.clickLogin} />}
      </div>
      )
    }

  }


