import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form/Form'; 
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      list: []

    }
  }

  componentDidMount() {
    axios
    .get('/api/inventory')
    .then(res => {
      console.log(res.data); 
      this.setState({
        list: res.data
      }); 
    }); 
  }; 
  
  render () {
    let { list } = this.state;
  return (
    <div className="App">
      <Dashboard 
      list={this.state.list}/>
      <Form />
      <Header/>
    </div>
  );
}
}

export default App;
