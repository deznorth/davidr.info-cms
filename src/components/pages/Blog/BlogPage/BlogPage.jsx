import React, { Component } from 'react';
import './BlogPage.scss';
//Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Components
import BlogHeader from '../components/BlogHeader/BlogHeader';
import BlogBody from '../components/BlogBody/BlogBody';
import BlogArchive from '../components/BlogArchive/BlogArchive';

class BlogPage extends Component {
    render(){
        const posts = this.props.posts ? this.props.posts : [];

        let bodyItems = [];
        let archiveItems = [];

        posts.forEach(group => {
            bodyItems = bodyItems.concat(group.items);
            archiveItems = archiveItems.concat(group.date);
        })

        return (
            <div id="BlogPage">
                <BlogHeader />
                <div className="blogPageContent">
                    <BlogBody items={bodyItems}/>
                    <BlogArchive items={archiveItems}/>
                </div>
            </div>
        );
    }
}

BlogPage.propTypes = {
    posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    posts: state.blog.posts
});

export default connect(mapStateToProps)(BlogPage);