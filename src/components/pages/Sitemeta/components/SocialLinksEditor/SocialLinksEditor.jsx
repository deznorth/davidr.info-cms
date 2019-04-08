import React, { Component } from 'react';
import './SocialLinksEditor.scss';

//Components
import SocialLinkForm from './components/SocialLinkForm/SocialLinkForm';

class SocialLinksEditor extends Component{
    render(){
        return (
            <div className="SocialLinksEditor bg-glass">
                <h2>Social Links</h2>
                <SocialLinkForm />
            </div>
        );
    }
}

export default SocialLinksEditor;