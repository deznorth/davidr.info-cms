import React from 'react';
import './SocialLinkItem.scss';

const SocialLinkItem = props => {

    const handleClick = () => {
        props.handleEdit(props._id);
    }

    return (
        <div onClick={handleClick} className="SocialLinkItem bg-glass">
            <p>{props.label}</p>
            <p>{props.url}</p>
            <p style={{color:props.color}}>{props.color}</p>
            <p>{props.iconClass}</p>
            <button className="btn-red">x</button>
        </div>
    );
}

export default SocialLinkItem;