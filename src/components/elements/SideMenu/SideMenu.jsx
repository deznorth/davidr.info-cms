import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.scss';

class SideMenu extends Component{
    render(){
        return(
            <div id="SideMenu" className="bg-glass">
                <ul>
                    <Link to='/dashboard'>Home</Link>
                </ul>
            </div>
        );
    }
}

export default SideMenu;