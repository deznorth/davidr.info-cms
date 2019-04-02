/*
 * @Author: David M. Rojas Gonzalez // davidr.info  
* @Date: 2019-03-08 20:35:56  
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-28 14:41:18
*/

import React, { Component } from 'react';
import './SkillsSection.scss';
import SkillsCategory from '../../elements/SkillsCategory/SkillsCategory';

const genKey = (category) => { //Uses the first character of the category title and a random number
    let key = '';
    key += category.title.charAt(0);
    key += Math.floor(Math.random()*256);
    return key;
}

class SkillsSection extends Component {
    state = {
        skills: [
            {
                title: 'Main Skills',
                isHighlighted: true,
                skills: [
                    {
                        name: 'Responsive Web Development',
                        proficiency: 8
                    },
                    {
                        name: 'Javascript',
                        proficiency: 6
                    },
                    {
                        name: 'React, Redux & React-Router',
                        proficiency: 5
                    },
                    {
                        name: 'CSS & SASS/SCSS',
                        proficiency: 7
                    },
                    {
                        name: 'REST APIs',
                        proficiency: 6
                    }
                ]
            },
            {
                title: 'Other Skills',
                isHighlighted: false,
                skills: [
                    {
                        name: 'Node.js'
                    },
                    {
                        name: 'Express.js'
                    },
                    {
                        name: 'MongoDB'
                    }
                ]
            },
            {
                title: 'Tools',
                isHighlighted: false,
                skills: [
                    {
                        name: 'Chrome Developer Tools'
                    },
                    {
                        name: 'Git'
                    },
                    {
                        name: 'Slack'
                    },
                    {
                        name: 'Trello'
                    },
                    {
                        name: 'Toggl'
                    }
                ]
            },
            {
                title: 'Software',
                isHighlighted: false,
                skills: [
                    {
                        name: 'Visual Studio Code'
                    },
                    {
                        name: 'Adobe XD'
                    },
                    {
                        name: 'Adobe Illustrator'
                    },
                    {
                        name: 'Adobe Photoshop'
                    }
                ]
            }
        ]
    }

    render(){

        let categories = [];
        this.state.skills.forEach((category, index) => {
            if(index === 0){
                categories.push(<SkillsCategory first key={genKey(category)} {...category} />);
            } else {
                categories.push(<SkillsCategory key={genKey(category)} {...category} />);
            }
        });

        return (
            <div className="skillsSection bg-glass">
                {categories}
            </div>
        );
    }
}

export default SkillsSection;