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

  render() {
    return (
      <div>
        <div>Form</div>
        <input name="url" type="text" placeholder="Image URL" onChange={this.handleChange}/>

        <input name="name" type="text" placeholder="product name"  onChange={this.handleChange}/>

        <input name="price" type="text" placeholder="price"  onChange={this.handleChange}/>

        <button className='cancel' onClick={this.cancel}>Cancel</button>
        <button>Add to Inventory</button>
      </div>
    );
  }
}
