/*
 * @Author: David M. Rojas Gonzalez // davidr.info 
 * @Date: 2019-03-04 20:48:25 
 * @Last Modified by: David M. Rojas Gonzalez // deznorth.com
 * @Last Modified time: 2019-03-05 14:04:25
*/

import React from 'react';
import './SocialBar.scss';
import ResumeBtn from '../ResumeBtn/ResumeBtn';


const SocialBar = (props) => {
    let resumebtn;
    if(props.resumeBtn){
        resumebtn = <ResumeBtn />;
    }

    return (
        <span className="socialBar">
            <ul>
                <a href="https://www.linkedin.com/in/davidrojas-dev/" className="social-link linkedin" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a>
                <a href="https://github.com/deznorth" className="social-link github" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square"></i> Github</a>
                <a href="https://codepen.io/david-rojas/" className="social-link codepen" rel="noopener noreferrer" target="_blank"><i className="fab fa-codepen"></i> Codepen</a>
                <a href="https://www.instagram.com/davidr.dev/" className="social-link instagram" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram" ></i> Instagram</a>
            </ul>
            {resumebtn}
        </span>
    );
}

export default SocialBar;