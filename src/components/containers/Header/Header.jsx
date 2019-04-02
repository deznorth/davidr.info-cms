/*
 * @Author: David M. Rojas Gonzalez // davidr.info 
 * @Date: 2019-03-04 19:12:01 
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-29 02:50:45
*/
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../resources/media/logo.svg';
import './Header.scss';
import ResumeBtn from '../../elements/ResumeBtn/ResumeBtn';

const Header = () => {

    /* 
        Remember to implement some way for the navBar to change depending on the current page
    */

    return (
        <header className="App-header">
            <span className="app-brand">
                <img src={logo} className="app-logo" alt="logo"/>
                <span>
                    <p className="header-brand-name">David Rojas</p>
                    <p className="header-brand-title">Front-end Web Developer</p>
                </span>
            </span>
            <span className="app-nav">
                <ul>
                <button onClick={()=>{
                    if(document.getElementById("aboutSection-default")){
                        document.getElementById("aboutSection-default").scrollIntoView({ behavior: 'smooth' });
                    }
                }} className="header-link">about</button>
                <button onClick={()=>{
                    if(document.getElementById("SkillsSection")){
                        document.getElementById("SkillsSection").scrollIntoView({ behavior: 'smooth' });
                    }
                }} className="header-link">skills</button>
                <button onClick={()=>{
                    if(document.getElementById("ProjectsSection")){
                        document.getElementById("ProjectsSection").scrollIntoView({ behavior: 'smooth' });
                    }
                }} className="header-link">projects</button>
                <Link className="header-link" to="/blog" >Blog</Link>
                </ul>
                <ResumeBtn />
            </span>
        </header>
    );
}

export default Header;