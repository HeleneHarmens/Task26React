import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Home from './pages/Index/home';
import * as serviceWorker from './serviceWorker';
import DashboardPage from './pages/Dashboard/dashboardPage';



ReactDOM.render(
    <Home />, document.getElementById('root')
);


/*
ReactDOM.render(
    <Router>
        <Route path='/' exact component={Home}/>


    </Router>, 
    document.getElementById('root'));
*/


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
