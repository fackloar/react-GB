import React from 'react';
import './Message.css';

function Message({ message, author, ...styles }) {
    return (
        <div {...styles} className="Message">
        <span className="author">{author}</span>
        <span className="message">{message}</span>
      </div>
    )
}

export default Message;
