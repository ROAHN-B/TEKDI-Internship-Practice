import React , { Component } from 'react';

export default class ListExp extends Component{
    render(){
        return (
            <li>{this.props.value}</li>
        )
    }
}
