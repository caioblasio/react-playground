import React, { Component } from 'react';

export default class List extends Component{

    constructor(props){
        super(props);
    }

    renderList(){
        return this.props.elements.map(element =>{
            return (
                <li>
                    
                </li>
            )
        })
    }

    render(){
        <ul>
            {this.renderList()}
        </ul>
    }
}