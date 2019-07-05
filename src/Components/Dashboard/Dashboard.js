import React, { Component } from "react"; 
import axios from "axios"; 
import Product from '../Product/Product'; 

export default class Dashboard extends Component {
    constructor () {
        super(); 
    }

    render() {
        return(
            <div>
            <div>Dashboard</div>
            <Product/>
            </div>
        )
    }
}