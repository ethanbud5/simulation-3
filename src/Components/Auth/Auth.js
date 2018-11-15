import React, { Component } from 'react';
import "./Auth.css"

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:""
        }
        this.changeHandler = this.changeHandler.bind(this);
    }
    changeHandler(e){
        this.setState({[e.target.name]:e.target.value})
    }
    
    render() {
        return (
            <div className="background_auth">
            <div className="auth_card">
                <h1>Helo</h1>
                <div>
                    <label>Username: </label>
                    <input type="text" onClick={this.changeHandler} name="username" placeholder="Username"/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onClick={this.changeHandler} name="password" placeholder="Password"/>
                </div>
                <div className="auth_btn_container">
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>

            </div>
        );
    }
}

export default Auth;