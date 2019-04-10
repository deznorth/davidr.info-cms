import React from 'react';
import logo from '../../../resources/media/logo.svg';
import './Header.scss';

const Header = props => {
    return (
        <div className={`App-header ${props.direction ? props.direction : ''}`}>
            <img src={logo} className="app-logo" alt="logo"/>
            <span>
                <p className="header-brand-title">Management Dashboard</p>
                <p className="header-brand-name">www.davidr.info</p>
            </span>
        </div>
    );
}

export default Header;