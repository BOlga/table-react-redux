import React, { Component } from 'react';
import Table from '../components/Table.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {   
    render() {
        return (    
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="app-content">
         <Table />
        </div>
      </div>
    );
  }
}

   


export default App;
