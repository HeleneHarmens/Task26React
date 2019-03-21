import React, { Component } from 'react';
import './App.css';
import Myheader from './components/header/header';
import Register from './components/Register/register';
import Login from './components/Login/login';
import Search from './components/Search/search';
import TopRestaurants from './components/TopRestaurants/topRestaurants';
import RecentReviews from './components/RecentReviews/recentReviews';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Myheader/>
      <TopRestaurants/>
      <RecentReviews/>
      <Search/>
      <Register/>
      <Login/>

      </div>
    );
  }
}

export default App;
