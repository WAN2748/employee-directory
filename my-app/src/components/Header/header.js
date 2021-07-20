import React, { Component } from "react";
import "../Header/style.css";

export default class Header extends Component {
    render(){
        return (
            <div className="header">
                <h1>Employee Directory</h1>
                <p>Search to narrow your results or click on Name to sort alphabetically.</p>
            </div>
        )
    }
}