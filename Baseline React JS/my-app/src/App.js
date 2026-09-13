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
import React, { Component, useState , useEffect } from 'react';
import LoginExp from './component/LoginExp';
import ListExp from './component/ListExp';
import useCustomHook from './component/CoutomHook';
import NativeDatePicker from './component/NativeDatePicker';

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

// export default class App extends Component{
 
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
    // state={
    //   isLoggedIn:false
    // };

    // clickLogin = () =>{
    //   this.setState({isLoggedIn:true});
    // }
    // clickLogout = () =>{
    //   this.setState({isLoggedout:false});
    // }

    // render(){
    //   const isLoggedIn = this.state.isLoggedIn;
    //   return (
    //     <div>
    //     {isLoggedIn ? <LoginExp name="Rohan" clickData={this.clickLogout} /> : <Guest clickData={this.clickLogin} />}
    //   </div>
    //   )
    // }
    // state = {
    //   Users: [
    //     {id : 101, name:"Rohan", password:"j43ik65hwh"},
    //     {id : 102, name:"Rohit", password:"ckdv89dvko"},
    //     {id : 103, name:"Ramesh",password:"kjnwuiod9"},
    //     {id : 104, name:"Rakesh",password:"alknvd87d"},
    //     {id : 105, name:"Rohini",password:"kjndsvods9"}
    //   ]
    // }
    // render (){
    //   const newUsers = this.state.Users.map((user) => {
    //     console.log(user);
    //     return (
    //     <h1 key={user.id}>
    //       ID:{user.id} Name:{user.name} Password:{user.password}
    //     </h1>        
    //   )
    //   });
    //   return (
    //     <div>
    //       {newUsers}
    //     </div>
    //   )
    // }

    // render(){
    //   const arr =this.props.numbers;
    //   const newArr = arr.map((nums) => {
    //     return <ListExp key={nums} value={nums} />
    //   })
    //   return (
    //     <div>
    //       {newArr}
    //     </div>
    //   )
    // }
  // }

  // function App(){
  //   const [name,Setname]= useState("Rohan");
  //   const [roll,Setroll] = useState("50");
  //   const handleClick = () => {
  //     Setname("Rohit");
  //     Setroll("51");
  //   };   
  //   return <React.Fragment>
  //     <h1>Name: {name}</h1>
  //     <h1>Roll: {roll}</h1>
  //     <button type="button" onClick={handleClick}>Change</button>
  //   </React.Fragment>
  // }

  // function App(){
  //   const [count,setCount] = useState(0);
  //   const handleIncrement = () =>{
  //     setCount(count+1);
  //   }
  //   const handleDecrement = () =>{
  //     setCount(count-1);
  //   }
  //   useEffect(()=>{
  //     console.log("Count Value is changed ");
  //   },[count]);
  //   return (
  //     <React.Fragment>
  //       <h1>Count up: {count}</h1>
  //       <button type="button" onClick={handleIncrement}>Click</button>
  //       <button type="button" onClick={handleDecrement}>Click</button>
  //     </React.Fragment>
  //   )
  // }

  // function App (){
  //   const data = useCustomHook();
  //   return (
  //     <React.Fragment>
  //       <h1>Count: {data.count}</h1>
  //       <button type="button" onClick={data.HandleIncrement}>Increment</button>
  //       <button type="button" onClick={data.handleDecrement}>Decrement</button>
  //     </React.Fragment>
  //   )
  // }

  function App(){
    return (<NativeDatePicker />)
  }
export default App;