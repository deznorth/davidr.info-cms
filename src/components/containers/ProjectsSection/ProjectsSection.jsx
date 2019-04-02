/*
* @Author: David M. Rojas Gonzalez // davidr.info  
* @Date: 2019-03-17 18:00:07  
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-31 16:50:55
*/

import React from 'react';
import './ProjectsSection.scss';
import ProjectDisplay from '../../elements/ProjectDisplay/ProjectDisplay';
import { genKey } from '../../../middleware/keygen';

/**
 * This will change when I actually build the API for my site, at the moment the data is hardcoded. 
*/
const data = [
    {
        imgUrl: 'https://farm5.staticflickr.com/4857/46684330754_a56e3a81eb_h.jpg',
        title: 'GIPHYExplorer',
        shortDescription: 'A project to practice the use of REST APIs using the GIPHY API',
        links: {
            repositoryUrl: 'https://github.com/deznorth/giphyexplorer-app',
            liveUrl: 'http://giphyexplorer.davidr.info'
        }
    },
    {
        imgUrl: 'https://farm5.staticflickr.com/4895/46684308284_830e05c28a_h.jpg',
        title: 'davidr.info',
        shortDescription: 'This website. I\'m testing color themes so the screenshot might not match the current site.',
        links: {
            repositoryUrl: 'https://github.com/deznorth/davidr.info'
        }
    },
    {
        imgUrl: 'https://farm8.staticflickr.com/7802/40442153413_4d4b0ddd42_h.jpg',
        title: 'hellohaidy.com',
        shortDescription: 'The portfolio site for HelloHaidy',
        links: {
            repositoryUrl: 'https://github.com/Hellohaidy/hellohaidy.com',
            liveUrl: 'http://www.hellohaidy.com'
        }
    },
    {
        imgUrl: 'https://farm8.staticflickr.com/7868/32465538817_b948b4d900_h.jpg',
        title: 'DezYelpCamp',
        shortDescription: 'Clone of YelpCamp made during the Udemy course "The Web Development Bootcamp"',
        links: {
            repositoryUrl: 'https://github.com/deznorth/dezyelpcamp',
            liveUrl: 'http://dezyelpcamp.davidr.info/'
        }
    },
    {
        imgUrl: 'https://farm5.staticflickr.com/4898/46684330724_7abe40238d_h.jpg',
        title: 'Brackets Color Keeper',
        shortDescription: 'ColorKeeper is an extension for Brackets that allows you to add colors to a color palette and then insert them into your code from there.',
        links: {
            repositoryUrl: 'https://github.com/deznorth/Brackets.Color.Keeper'
        }
    },
]

let projects = [];

data.forEach(project => {
    projects.push(<ProjectDisplay key={genKey(project.title)} {...project} />);
});

const ProjectsSection = () => {
    return(
        <div className="projectsSection">
            <span id="ProjectsSection"></span>
            {projects}
        </div>
    );
}

export default ProjectsSection;