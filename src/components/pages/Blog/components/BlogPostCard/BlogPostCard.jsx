import React from 'react';
import './BlogPostCard.scss';
import placeHolderImg from '../../../../../resources/media/placeholder-600x400.png';

const BlogPostCard = props => {
    return (
        <div className="blogPostCard bg-glass">
            <span className="blogPostCard-imgWrapper">
                <img src={props.img && props.img !== ' ' ? props.img : placeHolderImg} alt={props.imgAlt} />
            </span>
            <span className="blogPostCard-contentWrapper">
                <div>
                    <h3>{props.title}</h3>
                    <p>{`${props.shortText} ...`}</p>
                </div>
                <div>
                    <p>{props.datePosted}</p>
                    <p>{`Posted by ${props.author}`}</p>
                </div>
            </span>
        </div>
    );
}

export default BlogPostCard;