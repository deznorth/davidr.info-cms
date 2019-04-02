/*
 * @Author: David M. Rojas Gonzalez // davidr.info  
* @Date: 2019-03-08 20:51:39  
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-28 14:38:08
*/

import React from 'react';
import './SkillsCategory.scss';
import Skill from '../Skill/Skill';

const genKey = (skill) => { //Uses the first character of the skill name and a random number
    let key = '';
    key += skill.name.charAt(0);
    key += Math.floor(Math.random()*256);
    return key;
}

const SkillsCategory = (props) => {

    let highlightedClass = '';
    let skills = [];

    if(props.isHighlighted === true){ //if highlighted, show skillBar and use highlighted class
        highlightedClass = 'highlightedCategory';
        props.skills.forEach( skill => {
            skills.push(<Skill key={genKey(skill)} {...skill} isHighlighted/>);
        });
    } else {
        props.skills.forEach( skill => {
            skills.push(<Skill key={genKey(skill)} {...skill} />);
        });
    }

    let theID = null;
    if (props.first){
        theID = 'SkillsSection';
    }

    return (
        <div id={theID} className={`skillsCategory ${highlightedClass}`}>
            <h2>{props.title || 'noTitleAssigned'}</h2>
            <ul className="skillsCategory-content">
                {skills}
            </ul>
        </div>
    );
}

export default SkillsCategory;