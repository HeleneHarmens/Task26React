
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Myheader from "./components/header/header";
import RestaurantPage from "./pages/Restaurant/RestaurantPage";
class App extends Component {
  
  render() {
    return (
      
        <div className="App">
          <Myheader/>
        <Router>
          <Route path="/restaurant" component = {RestaurantPage}/>
    
        </Router>
       
      </div>

    );
  }
}



export default App;
