

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import Myheader from "./components/header/header";
import Home from "./pages/Index/home";
import DashboardPage from "./pages/Dashboard/dashboardPage";
import RestaurantPage from "./pages/Restaurant/RestaurantPage";

class App extends Component {
  
  
  render() {
    
    return (
      <div className="App">
        <Myheader />
        <Router>
          <ul>
            <li><NavLink activeStyle={{ color: 'black' }} to="/home">Home</NavLink></li>
            <li><NavLink activeStyle={{ color: 'black' }} to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink activeStyle={{ color: 'black' }} to="/restaurant">Restaurants</NavLink></li>
          </ul>
          <Route path="/home" component={Home} />
          <Route path="/restaurant" component={RestaurantPage} />
          <Route path="/dashboard" component={DashboardPage} />
        </Router>
      </div>
    );
  }
}



export default App;
