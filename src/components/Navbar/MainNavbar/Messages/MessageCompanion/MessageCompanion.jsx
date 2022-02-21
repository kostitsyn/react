import React from 'react';
import c from './MessageCompanion.module.css';

const MessageCompanion = (props) => {
    let dateObj = new Date(props.date);
    let timeSend = `${dateObj.getHours()}:${dateObj.getMinutes()}`;
    return (
        <div className={c.companion}>
            <img className={c.ava} src={props.companion.imgLink} alt='ava' />
            <span className={c.name}>{props.companion.username} <span className={c.time}>{timeSend}</span></span>

            <span className={c.text}>{props.message}</span>
        </div>
    )
}

export default MessageCompanion;