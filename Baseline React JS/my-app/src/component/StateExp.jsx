import React , { Component } from "react";

class Student extends Component{
    state={
        name:"Rohan",
        roll:"50",
        class:"Btech",
        year:"4th year"
    }
    render(){
        return (
            <h1>Hello my name is {this.state.name}
                My roll number is {this.state.roll}
                I am in class {this.state.btech},
                I am in {this.state.year}
            </h1>
           
    )
    }
}

export default Student;