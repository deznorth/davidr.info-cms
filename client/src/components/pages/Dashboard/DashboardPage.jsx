import React, { Component } from 'react';
import './DashboardPage.scss';

class DashboardPage extends Component{

    componentDidMount(){
        document.title = 'Dashboard';
    }

    render(){
        return (
            <div id="DashboardPage">
                <h1>Dashboard</h1>
            </div>
        );
    }
}

export default DashboardPage;