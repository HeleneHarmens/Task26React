import React, { Component } from 'react';
import './App.css';
import Myheader from './components/header/header';
import Home from './pages/Index/home';
import DashboardOwner from './pages/Dashboard/dashboardOwner';
import DashboardCommon from './pages/Dashboard/dashboardCommon';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Myheader/>
      <Home/>

      <DashboardCommon/>
      <DashboardOwner/>
      </div>
    );
  }
}

export default App;
