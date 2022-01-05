import c from "./OwnDialog.module.css";
import React from "react";

const OwnDialog = (props) => {
    return (
        <div className={c.me}>
            <span className={c.name}>{props.currentUser.name}</span>
            <span className={c.message}>{props.state.message}</span>
            <img className={c.ava} src={props.currentUser.imgLink} alt='ava' />
        </div>
    )
}

export default OwnDialog;