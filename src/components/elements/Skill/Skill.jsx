/*
 * @Author: David M. Rojas Gonzalez // davidr.info  
* @Date: 2019-03-08 21:47:42  
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-08 22:41:39
*/

import React from 'react';
import './Skill.scss';

const SkillBar = (props) => {

    let percentage = '1%'; //default value of 1%
    percentage = `${props.proficiency * 10}%`; //convert a number between 1-10 to a percentage

    return (
        <div className="skillBar-back">
            <div style={{width: percentage}} className="skillBar-front"></div>
        </div>
    );
}

const Skill = (props) => {

    let skillBar;
    if(props.isHighlighted && props.proficiency){
        skillBar = <SkillBar proficiency={props.proficiency} />;
    }

    return (
        <div className="skillComponent">
            <p>{props.name}</p>
            {skillBar}
        </div>
    );
}

export default Skill;