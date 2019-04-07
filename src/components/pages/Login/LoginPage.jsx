import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './LoginPage.scss';
import Auth from '../../../middleware/auth';

class LoginPage extends Component {

    state = {
        username: '',
        password: '',
        redirect: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    handleSubmit = (e) => {
        fetch('/api/user/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then(res => res.json().then(data => {
            const {success, message, token} = data;
            
            switch(success){
                case true:
                    localStorage.setItem('auth_token', token);
                    this.setState({
                        error: undefined,
                        redirect: true
                    });
                    break;
                case false:
                    this.setState({
                        error: message
                    });
                    break;
            }
        }));
        e.preventDefault();
    }

    render(){
        document.title = 'Login';
        let redirect;
        if(Auth.isLoggedIn()){
            redirect = <Redirect to="/dashboard" />;
        }

        let errorMessage;
        if(this.state.error){
            errorMessage = <div><br/><p className="alert alert-danger">{this.state.error}</p></div>;
        }
        return(
            <div id="LoginPage">
                {redirect}
                <form onSubmit={this.handleSubmit}>
                    <div className="userfield">
                        <i className="fas fa-user"></i>
                        <input onChange={this.handleChange} type="text" name="username" id="username-field" placeholder="Username"/>
                    </div>
                    <div className="passfield">
                        <i className="fas fa-key"></i>
                        <input onChange={this.handleChange} type="password" name="password" id="password-field" placeholder="Password"/>
                    </div>
                    <input type="submit" value="Login"/>
                </form>
                {errorMessage}
            </div>
        );
    }
}

export default LoginPage;