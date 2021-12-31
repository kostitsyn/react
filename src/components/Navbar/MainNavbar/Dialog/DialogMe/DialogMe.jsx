import c from "./DialogMe.module.css";
import React from "react";

const DialogMe = (props) => {
    return (
        <div className={c.me}>
            <span className={c.name}>{props.me.name}</span>
            <span className={c.message}>{props.state.message}</span>
            <img className={c.ava} src={props.me.imgLink} alt='ava' />
        </div>
    )
}

export default DialogMe;