import React, { Component } from "react"; 
import axios from "axios"; 
import Product from "../Product/Product"

export default class Dashboard extends Component {
    constructor () {
        super(); 
        
    }

    render() {
       let mappedProducts= this.props.list.map(product => {
            return(
                <Product
                product={product}
                key={product.id}
                />
            )
        })
        return(
            <div>
            <div>Dashboard {mappedProducts}</div>
            </div>
        )
    }
}