import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './SocialLinksEditor.scss';

//Actions
import { fetchSocialLinks, deleteSocialLink } from '../../../../../redux/actions/metaActions';

//Components
import SocialLinkForm from './components/SocialLinkForm/SocialLinkForm';
import SocialLinkItem from './components/SocialLinkItem/SocialLinkItem';

class SocialLinksEditor extends Component{

    state = {
        editing: false,
        selected: {}
    }

    componentDidMount(){
        this.props.fetchSocialLinks();
    }

    handleSocialLinkEdit = id => {
        const item = this.props.socialLinks.find(link => {
            return link._id === id
        });

        this.setState({
            editing: true,
            selected: item
        });
    }

    handleSocialLinkDelete = id => {
        this.props.deleteSocialLink(id);
    }

    render(){

        const socialLinkItems = this.props.socialLinks.map(socialLink => {
            return (
                <SocialLinkItem 
                key={socialLink._id} 
                {...socialLink} 
                handleEdit={this.handleSocialLinkEdit}
                handleDelete={this.handleSocialLinkDelete}
                />
            );
        });

        return (
            <div className="SocialLinksEditor bg-glass">
                <h2>Social Links</h2>
                <SocialLinkForm editing={this.state.editing} selected={this.state.selected} />
                <div className="SocialLinksDisplay">
                    {socialLinkItems}
                </div>
            </div>
        );
    }
}

SocialLinksEditor.propTypes = {
    fetchSocialLinks: PropTypes.func.isRequired,
    deleteSocialLink: PropTypes.func.isRequired,
    socialLinks: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    socialLinks: state.meta.socialLinks
});

export default connect(mapStateToProps, { fetchSocialLinks, deleteSocialLink })(SocialLinksEditor);