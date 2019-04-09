import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './SocialLinkForm.scss';

//Components
import { BlockPicker } from 'react-color';

//Actions
import { createSocialLink, updateSocialLink } from '../../../../../../../redux/actions/metaActions';

class SocialLinkForm extends Component{

    state = {
        editing: false,
        label: '',
        url: '',
        iconClass: '',
        color: '#ffffff'
    }

    componentDidUpdate(prevProps){
        if(prevProps.selected !== this.props.selected){
            this.setState({
                ...this.props.selected,
                editing: this.props.editing
            });
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleColorChange = newColor => {
        this.setState({
            color: newColor.hex
        });
    }

    handleShowPicker = (e) => {
        const picker = document.getElementsByClassName('blockPicker')[0];
        picker.classList.toggle('closed');
        e.preventDefault();
    }

    handleBlur = e => {
        const picker = document.getElementsByClassName('blockPicker')[0];
        picker.classList.toggle('closed');
    }

    handleSubmit = e => {
        const newSocialLink = {
            label: this.state.label,
            url: this.state.url,
            iconClass: this.state.iconClass,
            color: this.state.color
        }

        this.props.createSocialLink(newSocialLink);

        this.setState({
            editing: false,
            selected: undefined,
            _id: undefined,
            label: '',
            url: '',
            iconClass: '',
            color: '#FFFFFF'
        });
        
        e.preventDefault();
    }

    handleEdit = e => {

        const updatedSocialLink = {
            id: this.state._id,
            label: this.state.label,
            url: this.state.url,
            iconClass: this.state.iconClass,
            color: this.state.color
        }

        this.props.updateSocialLink(updatedSocialLink);

        this.setState({
            editing: false,
            selected: undefined,
            _id: undefined,
            label: '',
            url: '',
            iconClass: '',
            color: '#FFFFFF'
        });

        e.preventDefault();
    }

    render(){

        let editClass = '';
        if(this.state.editing){
            editClass = 'editing';
        }

        return (
            <form onSubmit={this.handleSubmit} className={`SocialLinkForm ${editClass}`}>
                <input onChange={this.handleChange} type="text" name="label" placeholder="Label" value={this.state.label}/>
                <input onChange={this.handleChange} type="text" name="url" placeholder="Url" value={this.state.url}/>
                <div className="colorWrapper">
                    <button onClick={this.handleShowPicker}><i style={{color: this.state.color}} className="fas fa-tint"></i> Pick a Color</button>
                    <div onMouseLeave={this.handleBlur} className="blockPicker closed">
                        <BlockPicker color={this.state.color} onChangeComplete={this.handleColorChange}/>
                    </div>
                </div>
                <input onChange={this.handleChange} type="text" name="iconClass" placeholder="Fontawesome Icon Class" value={this.state.iconClass}/>
                <input type="submit" value="Add"/>
                <button className="saveBtn btn-green" onClick={this.handleEdit}>Save</button>
            </form>
        );
    }
}

SocialLinkForm.propTypes = {
    createSocialLink: PropTypes.func.isRequired,
    updateSocialLink: PropTypes.func.isRequired
}

export default connect(null, { createSocialLink, updateSocialLink })(SocialLinkForm);