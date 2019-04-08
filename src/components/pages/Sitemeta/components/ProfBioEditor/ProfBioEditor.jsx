import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './ProfBioEditor.scss';

class ProfBioEditor extends Component{

    state = {
        imgUrl: '',
        title: '',
        body: ''
    }
    render(){
        return (
            <div className="ProfBioEditor bg-glass">
                <h2>Professional Bio</h2>
                <div className="formWrapper">
                    <img src={this.state.imgUrl} alt="profile"/>
                    <form className="inputsWrapper">
                        <input type="text" name="title" placeholder="Title"/>
                        <input type="text" name="imgUrl" placeholder="Image Url"/>
                        <textarea name="body" placeholder="Professional Bio Content..."></textarea>
                        <button className="resetBtn">Reset</button>
                        <input type="submit" value="Save"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default ProfBioEditor;