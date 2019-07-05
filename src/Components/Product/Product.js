import React, { Component } from "react"; 
import axios from "axios"; 

export default class Product extends Component{
    render() {
        console.log(this.props)
        return(
            <div>
            <div>Product </div>
            <div className="product details">
                <img src={this.props.product.url} alt="clothing item"/>
                <p>{this.props.product.name}</p>
                <p>Price: ${this.props.product.price}</p>
            </div>

            </div>
        )
    }
}
