import React, { Component } from 'react';
import './SitemetaPage.scss';

//Components
import ProfBioEditor from './components/ProfBioEditor/ProfBioEditor';
import ExtBioEditor from './components/ExtBioEditor/ExtBioEditor';

class SitemetaPage extends Component{

    componentDidMount(){
        document.title = 'Sitemeta';
    }

    render(){
        return (
            <div id="SitemetaPage">
                <h1>Sitemeta</h1>
                <ProfBioEditor />
                <ExtBioEditor />
            </div>
        );
    }
}

export default SitemetaPage;