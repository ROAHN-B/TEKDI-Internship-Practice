import React, { Component } from 'react';
class EventHandler extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Rohan",
            roll:this.props.roll
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () =>{
        console.log("Button Clicked", this);
    }
    render(){
        return (
            <div>
                <h1 class = "EventHandler">Hello {this.state.name} your roll number is {this.state.roll}
                    This is a event handler example in react js
                </h1>
                <button onClick={this.handleClick}>Event handler button</button>
            </div>
        )
    }
}


export default EventHandler;
