import React, { Component } from 'react';
import Navbar from "./../Navbar/Navbar";

class Form extends Component {
    render() {
        return (
            <div className="logged_in_main_content">
                <Navbar history={this.props.history}/>
                Form
            </div>
        );
    }
}

export default Form;