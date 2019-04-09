import React from 'react';
import './SocialLinkItem.scss';

const SocialLinkItem = props => {

    const handleClick = () => {
        props.handleEdit(props._id);
    }

    const handleDelete = e => {
        props.handleDelete(props._id);
        e.stopPropagation();
    }

    return (
        <div onClick={handleClick} className="SocialLinkItem bg-glass">
            <p>{props.label}</p>
            <p>{props.url}</p>
            <p style={{color:props.color}}>{props.color}</p>
            <p>{props.iconClass}</p>
            <button onClick={handleDelete} className="btn-red">x</button>
        </div>
    );
}

export default SocialLinkItem;