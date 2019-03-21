import React, { Component } from 'react';
import './App.css';
import Myheader from './components/header/header';
import RestaurantCards from './components/cards/RestaurantCards';
class App extends Component {

  state ={
    restaurants: [],
  };


  componentDidMount() {
    fetch("https://myassapi.herokuapp.com/restaurant")
      .then(response => { return response.json() })
      .then(findresponse => {
        console.log(findresponse);
        this.setState({
          restaurants: findresponse
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    
    return (

      <div className="App">
      <Myheader/>

      </div>
    );
  }
}

export default App;
