import React from 'react';
import './SocialLinkItem.scss';

const SocialLinkItem = props => {
    return (
        <div className="SocialLinkItem bg-glass">
            <p>{props.label}</p>
            <p>{props.url}</p>
            <p style={{color:props.color}}>{props.color}</p>
            <p>{props.iconClass}</p>
            <button>x</button>
        </div>
    );
}

export default SocialLinkItem;