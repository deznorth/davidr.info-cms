import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './SocialLinksEditor.scss';

//Actions
import { fetchSocialLinks } from '../../../../../redux/actions/metaActions';

//Components
import SocialLinkForm from './components/SocialLinkForm/SocialLinkForm';
import SocialLinkItem from './components/SocialLinkItem/SocialLinkItem';

class SocialLinksEditor extends Component{

    componentDidMount(){
        this.props.fetchSocialLinks();
    }

    render(){

        const socialLinkItems = this.props.socialLinks.map(socialLink => {
            return (
                <SocialLinkItem {...socialLink} />
            );
        });

        return (
            <div className="SocialLinksEditor bg-glass">
                <h2>Social Links</h2>
                <SocialLinkForm />
                <div className="SocialLinksDisplay">
                    {socialLinkItems}
                </div>
            </div>
        );
    }
}

SocialLinksEditor.propTypes = {
    fetchSocialLinks: PropTypes.func.isRequired,
    socialLinks: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    socialLinks: state.meta.socialLinks
});

export default connect(mapStateToProps, { fetchSocialLinks })(SocialLinksEditor);