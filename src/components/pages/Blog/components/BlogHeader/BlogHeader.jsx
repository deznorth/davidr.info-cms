import React from 'react';
import './BlogHeader.scss';

const BlogHeader = props => {
    return (
        <div className="blogHeader">
            <h1>{props.title ? props.title : 'Blog'}</h1>
            <hr/>
        </div>
    );
}

export default BlogHeader;