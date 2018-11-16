import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import "./Dashboard.css"

class Dashboard extends Component {
    render() {
        return (
            <div className="logged_in_main_content">
                <Navbar history={this.props.history}/>
                <div className="dashboard_main_section">
                
                </div>
            </div>
        );
    }
}

export default Dashboard;