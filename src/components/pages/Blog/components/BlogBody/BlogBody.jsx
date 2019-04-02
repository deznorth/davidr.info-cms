import React from 'react';
import './BlogBody.scss';

//components
import BlogPostCard from '../BlogPostCard/BlogPostCard';

const BlogBody = props => {

    const items = props.items ? props.items : [];

    const posts = items.map(post => (<BlogPostCard key={post.id} {...post} />));

    return (
        <div className="blogBody">
            {posts}
        </div>
    );
}

export default BlogBody;