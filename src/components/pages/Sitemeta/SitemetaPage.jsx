import React, { Component } from 'react';
import './SitemetaPage.scss';

//Components
import ProfBioEditor from './components/ProfBioEditor/ProfBioEditor';

class SitemetaPage extends Component{

    componentDidMount(){
        document.title = 'Sitemeta';
    }

    render(){
        return (
            <div id="SitemetaPage">
                <h1>Sitemeta</h1>
                <ProfBioEditor />
            </div>
        );
    }
}

export default SitemetaPage;