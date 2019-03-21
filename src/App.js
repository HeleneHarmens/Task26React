import React, { Component } from 'react';
import './App.css';
import Myheader from './components/header/header';
import Login from './components/Login/login';
import Search from './components/Search/search';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Myheader/>
      
      <Search/>


      </div>
    );
  }
}

export default App;
