import React, { Component } from 'react';
import DashboardOwner from './dashboardOwner';
import DashboardCommon from './dashboardCommon';
import './dashboard.css';

class DashboardPage extends Component {
    state = {

    }

    render() { 
        return (
            <React.Fragment>
            <h1>DASHBOARD</h1>
            <div className="DashboardPage">

            <div className="DashboardCommon">
                <h2>DASHBOARD - COMMON</h2>
                <DashboardCommon/>
            </div>
            <div className="DashboardOwner">
                <h2>DASHBOARD - OWNER</h2>
                <DashboardOwner/>
            </div>

            </div>
            
        </React.Fragment>

        );
    }
}
 
export default DashboardPage;

