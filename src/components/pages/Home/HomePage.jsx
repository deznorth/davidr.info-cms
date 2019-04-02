import React, { Component } from 'react';
import './HomePage.scss';
import Hero from '../../containers/Hero/Hero';
import AboutSection from '../../containers/AboutSection/AboutSection';
import SkillsSection from '../../containers/SkillsSection/SkillsSection';
import ProjectsSection from '../../containers/ProjectsSection/ProjectsSection';

class HomePage extends Component {
    render(){
        return(
            <div id="HomePage">
                <Hero />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
            </div>
        );
    }
}

export default HomePage;