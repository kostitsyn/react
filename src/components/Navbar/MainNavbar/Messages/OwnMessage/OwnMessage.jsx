import c from "./OwnMessage.module.css";
import React from "react";

const OwnMessage = ({date, currentUser, message}) => {
    let dateObj = new Date(date);
    let timeSend = `${dateObj.getHours()}:${dateObj.getMinutes()}`;
    return (
        <div className={c.me}>
            <span className={c.name}><span className={c.time}>{timeSend}</span> {currentUser.username}</span>
            <span className={c.text}>{message}</span>
            <img className={c.ava} src={currentUser.imgLink} alt='ava' />
        </div>
    )
}

export default OwnMessage;