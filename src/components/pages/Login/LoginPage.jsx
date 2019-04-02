import React, { Component } from 'react';
import './LoginPage.scss';

class LoginPage extends Component {
    render(){
        return(
            <div id="LoginPage">
                <form action="/api/user" method="POST">
                    <div className="userfield">
                        <i className="fas fa-user"></i>
                        <input type="text" name="username" id="username-field" placeholder="Username"/>
                    </div>
                    <div className="passfield">
                        <i className="fas fa-key"></i>
                        <input type="password" name="password" id="password-field" placeholder="Password"/>
                    </div>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        );
    }
}

export default LoginPage;