import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar history={this.props.history}/>
                Dashboard
            </div>
        );
    }
}

export default Dashboard;