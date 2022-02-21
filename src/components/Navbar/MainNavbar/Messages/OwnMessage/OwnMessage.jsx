import c from "./OwnMessage.module.css";
import React from "react";

const OwnMessage = (props) => {
    let dateObj = new Date(props.date);
    let timeSend = `${dateObj.getHours()}:${dateObj.getMinutes()}`;
    return (
        <div className={c.me}>
            <span className={c.name}><span className={c.time}>{timeSend}</span> {props.currentUser.username}</span>
            <span className={c.text}>{props.message}</span>
            <img className={c.ava} src={props.currentUser.imgLink} alt='ava' />
        </div>
    )
}

export default OwnMessage;