import React, { Component } from 'react';
import Myheader from '../../components/header/header';
import Register from '../../components/Register/register';
import Login from '../../components/Login/login';
import Search from '../../components/Search/search';
import TopRestaurants from '../../components/TopRestaurants/topRestaurants';
import RecentReviews from '../../components/RecentReviews/recentReviews';
import DashboardPage from '../../pages/Dashboard/dashboardPage';
import './home.css';


class Home extends Component {
    state = {

    }

    render() { 
        return (
        <div className="Home">
            <Myheader/>
        <div className="RegisterLogin">
            <Login/>
            <Register/>
        </div>
        <div className="SearchBox">
            <Search/>
        </div>
        <div className="InfoStuff">
            <TopRestaurants/>
            <RecentReviews/>
        </div>
            <DashboardPage/>
        </div>

        );
    }
}
 
export default Home;

