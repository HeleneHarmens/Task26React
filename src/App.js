import React, { Component } from 'react';
import './App.css';
import Myheader from './components/header/header';
import Home from './pages/Index/home';


class App extends Component {
  render() {
    return (
      <div className="App">

      <Myheader/>
      <Home/>


      </div>
    );
  }
}

export default App;
