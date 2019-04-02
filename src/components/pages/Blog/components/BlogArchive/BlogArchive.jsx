import React from 'react';
import './BlogArchive.scss';
import { Link } from 'react-router-dom';
import { genKey } from '../../../../../middleware/keygen';

const BlogArchive = props => {

    const items = props.items ? props.items : [];
    const links = items.map(item => (
        <Link key={genKey()} to={`/blog/${item.year}/${item.month}`} >{`${item.month} ${item.year}`}</Link>
    ));

    return (
        <div className="blogArchive bg-glass">
            <h2>Archive</h2>
            <ul>
                {links}
            </ul>
        </div>
    );
}

export default BlogArchive;