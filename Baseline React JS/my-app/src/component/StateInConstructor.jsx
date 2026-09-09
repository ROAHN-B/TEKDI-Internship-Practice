import React , { Component } from "react";

class StateInConstructor extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"Karan",
            roll:"51",
            class:"Btech",
            year:"4th year"
        }
    }
    render(){
        return (
            <h1>This is State in Constructor
                Hello my name is {this.state.name}
                My roll number is {this.state.roll}
                I am in class {this.state.class},
                I am in {this.state.year}
            </h1>
        )
    }
}

export default StateInConstructor;