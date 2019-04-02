import React from 'react';
import logo from '../../../resources/media/logo.svg';
import './Header.scss';

const Header = () => {
    return (
        <header className="App-header">
            <span className="app-brand">
                <img src={logo} className="app-logo" alt="logo"/>
                <span>
                    <p className="header-brand-title">Management Dashboard</p>
                    <p className="header-brand-name">www.davidr.info</p>
                </span>
            </span>
        </header>
    );
}

export default Header;