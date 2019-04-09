import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './SideMenu.scss';

//Middleware    
import Auth from '../../../middleware/auth';

//Components
import Header from '../../containers/Header/Header';

class SideMenu extends Component{

    handleLogout = (e) => {
        Auth.logout();
        this.props.history.push('/');
    }

    render(){

        let openClass;
        if(this.props.showSideMenu){
            openClass = 'open'
        }

        return(
            <div id="SideMenu" className={`bg-glass ${openClass ? openClass : ''}`}>
                <div className="navHeaderGroup">
                    <Header direction="column"/>
                </div>
                <div className="navLinksGroup">
                    <ul>
                        <Link className="navLink" to='/dashboard'><i className="fas fa-home"></i>Home</Link>
                        <Link className="navLink" to='/sitemeta'><i className="far fa-address-card"></i>Info</Link>
                        <Link className="navLink" to='/projects'><i className="fas fa-cubes"></i>Projects</Link>
                        <Link className="navLink" to='/skills'><i className="fas fa-medal"></i>Skills</Link>
                        <Link className="navLink" to='/blog'><i className="fas fa-quote-left"></i>Blog</Link>
                    </ul>
                </div>
                <div className="extraLinksGroup">
                    <a className="navLink viewSiteLink" href="https://www.davidr.info" rel="noreferrer noopener" target="_blank"><i className="fas fa-external-link-alt"></i>View Site</a>
                    <button className="navLink logoutBtn" onClick={this.handleLogout}><i className="fas fa-sign-out-alt"></i>Logout</button>
                </div>
            </div>
        );
    }
}

SideMenu.propTypes = {
    showSideMenu: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    showSideMenu: state.meta.showSideMenu
});

export default connect(mapStateToProps)(withRouter(SideMenu));