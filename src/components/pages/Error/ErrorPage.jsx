import React, { Component } from 'react';
import './ErrorPage.scss';

class ErrorPage extends Component{
    render(){
        return (
            <div id="ErrorPage">
                <h1>Error 404</h1>
                <h2>Page could not be fount</h2>
            </div>
        );
    }
}

export default ErrorPage;