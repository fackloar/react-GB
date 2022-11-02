import React from 'react';
import './Message.css';

function Message(props) {
    return(
        <div class = "style"><br></br>{props.message}</div>

    );
}

export default Message;
