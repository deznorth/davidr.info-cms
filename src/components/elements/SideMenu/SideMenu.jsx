import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './SideMenu.scss';

class SideMenu extends Component{
    render(){
        
        let openClass;
        if(this.props.showSideMenu){
            openClass = 'open'
        }

        return(
            <div id="SideMenu" className={`bg-glass ${openClass ? openClass : ''}`}>
                <ul>
                    <Link to='/dashboard'>Home</Link>
                </ul>
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

export default connect(mapStateToProps)(SideMenu);