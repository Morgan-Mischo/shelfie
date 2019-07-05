import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form/Form'; 
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Form />
      <Header/>
      <Product />
    </div>
  );
}

export default App;
