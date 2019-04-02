/*
 * @Author: David M. Rojas Gonzalez // deznorth.com 
 * @Date: 2019-03-05 11:01:09 
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-28 14:46:18
*/

import React from 'react';
import './AboutSection.scss';
import profilePic from '../../../resources/media/ProfilePic.jpg';

let extraIsVisible = false;

const AboutSection = () => {
    
    const HandleToggleExtra = (e) => {
        const extraCard = document.getElementById('aboutSection-extra');
        const btnIcon = document.getElementById('about-btn-icon');
        const defaultCard = document.getElementById('aboutSection-default');
        extraCard.classList.toggle('extraHidden');
        
        if(extraIsVisible === false){
            extraIsVisible = true;
            btnIcon.classList.replace('fa-caret-right', 'fa-caret-left');
            extraCard.scrollIntoView({ behavior: 'smooth'});
        }else{
            extraIsVisible = false;
            btnIcon.classList.replace('fa-caret-left', 'fa-caret-right');
            defaultCard.scrollIntoView({ behavior: 'smooth'});
        }

    }

    return (
        <div id="aboutSection" className="aboutSection">
            <div id="aboutSection-default" className="aboutSection-card bg-glass">
                <span>
                    <img width="200px" height="200px" src={profilePic} alt="David Rojas" />
                    <div>
                        <h2>About Me</h2>
                        <p>David Rojas is an Information Science student at the University of North Florida; expecting to graduate in Fall 2021. He’s pursuing a career in web development, starting as a Front-end Developer to create awesome websites and applications. David is a self-driven developer with an eye for design and attention to detail. He takes pride in his work and loves taking structured and organized approaches. He’s currently working on a few side projects and is seeking internship opportunities</p>
                    </div>
                </span>
                <button onClick={HandleToggleExtra}><i id="about-btn-icon" className="fas fa-caret-right"></i></button>
            </div>
            <div id="aboutSection-extra" className="aboutSection-card bg-glass extraHidden">
                <div>
                    <h2>Get to know me a bit more...</h2>
                    <p>On a more personal note, I'm a friendly guy who loves playing video games, more specifically, team based games that make my team and I think strategically and work together. As a result, my two favorite games are Rocket League and Dota 2. Another hobby of mine is latin dancing. I know how to salsa and bachata, and I’ve taught classes in casual and professional settings. </p>
                </div>
            </div>

        </div>
    );
}

export default AboutSection;