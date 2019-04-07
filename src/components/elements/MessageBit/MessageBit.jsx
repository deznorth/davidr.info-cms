import React from 'react';
import './MessageBit.scss';

const MessageBit = props => {
    return (
        <div className={`MessageBit ${props.type ? props.type : ''}`}>
            <p>{props.message}</p>
        </div>
    );
}

export default MessageBit;