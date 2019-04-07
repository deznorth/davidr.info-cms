import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './LoginPage.scss';

//Middleware
import Auth from '../../../middleware/auth';

//Components
import MessageBit from '../../elements/MessageBit/MessageBit';

//Actions
import { toggleSideMenu } from '../../../redux/actions/metaActions';

class LoginPage extends Component {
    
    state = {
        username: '',
        password: '',
        redirect: false
    }

    componentDidMount(){
        this.props.toggleSideMenu();
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
            this.props.toggleSideMenu();
            redirect = <Redirect to="/dashboard" />;
        }

        let errorMessage;
        if(this.state.error){
            errorMessage = <MessageBit type="error" message={this.state.error} />;
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

LoginPage.propTypes = {
    toggleSideMenu: PropTypes.func.isRequired
}

export default connect(null, { toggleSideMenu })(LoginPage);