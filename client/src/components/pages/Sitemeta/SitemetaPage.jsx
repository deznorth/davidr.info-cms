import React, { Component } from 'react';
import './SitemetaPage.scss';

//Components
import ProfBioEditor from './components/ProfBioEditor/ProfBioEditor';
import ExtBioEditor from './components/ExtBioEditor/ExtBioEditor';
import SocialLinksEditor from './components/SocialLinksEditor/SocialLinksEditor';

class SitemetaPage extends Component{

    componentDidMount(){
        document.title = 'Sitemeta';
    }

    render(){
        return (
            <div id="SitemetaPage">
                <h1>Info</h1>
                <ProfBioEditor />
                <ExtBioEditor />
                <SocialLinksEditor />
            </div>
        );
    }
}

export default SitemetaPage;