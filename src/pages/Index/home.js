import React, { Component } from 'react';
import Register from '../../components/Register/register';
import Login from '../../components/Login/login';
import Search from "../../components/Search/search";
import TopRestaurants from "../../components/TopRestaurants/topRestaurants";
import RecentReviews from "../../components/RecentReviews/recentReviews";
import './home.css';


class Home extends Component {
    state = {

    }

    render() { 
        return (
            <div className="Home">
            <div className="RegisterLogin">
                <Login />
                <Register />
            </div>
            <div className="SearchBox">
                <Search />
            </div>
            <div className="InfoStuff">
                <TopRestaurants />
                <RecentReviews />
            </div>
        </div > 

        );         
    }
}
 
export default Home;

