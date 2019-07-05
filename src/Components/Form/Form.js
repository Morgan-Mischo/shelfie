import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
        url: '',
        name: '', 
        price: '',
        id: ''
    }
  }

  handleChange = e => {
      const { value, name } = e.target; 
      this.setState({
         [name]: value
      })
  }

  cancel = e => {
      this.setState({
          url: '', 
          name: '', 
          price: '',
          id: ''
      })
  }

  createProduct = e => {
    e.preventDefault(); 

    const { name, price, url } = this.state; 

    let newProduct = {
      name, 
      price, 
      url, 
      id: ''
    }; 

    this.props.createProduct(newProduct); 

    this.setState({
      name: "", 
      price: "", 
      url: "", 
      id: ''
    }); 
  }; 

  render() {
    return (
      <div>
        <div>Form</div>
        <input name="url" type="text" placeholder="Image URL" onChange={this.handleChange}/>

        <input name="name" type="text" placeholder="product name"  onChange={this.handleChange}/>

        <input name="price" type="text" placeholder="price"  onChange={this.handleChange}/>

        <button className='cancel' onClick={this.cancel}>Cancel</button>
        <button onClick={this.createProduct}>Add to Inventory</button>
      </div>
    );
  }
}
