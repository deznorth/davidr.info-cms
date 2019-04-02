/*
* @Author: David M. Rojas Gonzalez // davidr.info  
* @Date: 2019-03-17 18:03:16  
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-28 14:40:27
*/

import React from 'react';
import './ProjectDisplay.scss';
import placeholderImg from '../../../resources/media/placeholder-600x400.png';

let liveLink;

const ProjectLinks = props => {
    
    if(props.liveUrl){
        liveLink = <a href={props.liveUrl} target="_blank" rel="noopener noreferrer">See Live</a>;
    } else {
        liveLink = <p style={{color: "#656565"}}>See Live</p>
    }

    return (
        <div className="projectLinks">
            <a href={props.repositoryUrl} target="_blank" rel="noopener noreferrer">Repository</a>
            {liveLink}
        </div>
    );
}

const ProjectDisplay = props => {

    return (
        <div className="projectDisplay bg-glass">
            <div className="imgWrapper">
                <img src={props.imgUrl ? props.imgUrl : placeholderImg} alt={`Capture of ${props.title}`}/>
            </div>
            <div className="contentWrapper">
                <h3>{props.title}</h3>
                <p>{props.shortDescription}</p>
            </div>
            <ProjectLinks {...props.links} />
        </div>
    );
}

export default ProjectDisplay;