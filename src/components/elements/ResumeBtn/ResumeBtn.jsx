/*
 * @Author: David M. Rojas Gonzalez // deznorth.com 
 * @Date: 2019-03-05 14:02:24 
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-28 14:39:46
*/

import React from 'react';
import './ResumeBtn.scss';
import resume from '../../../resources/docs/David_Rojas_Resume.pdf';

const ResumeBtn = () => {
    return (
        <a href={resume} download="David_Rojas_Resume.pdf" className="download-resume">download resume</a>
    );
}

export default ResumeBtn;