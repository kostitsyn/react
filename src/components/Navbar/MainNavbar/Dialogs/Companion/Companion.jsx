import {NavLink} from "react-router-dom";
import c from "./Companion.module.css";
import React from "react";

const Companion = (props) => {
    let companion = props.dialog.user.id === props.userId ? props.dialog.companion : props.dialog.user;
    return (
        <NavLink to={`/messages/${props.dialog.id}`} className={navData => navData.isActive ? `${c.active} ${c.dialogItem}` : c.dialogItem}>
            <img src={companion.imgLink} alt='ava'/>
            <span className={c.companion}>{companion.username}</span>
            <span>{props.dialog.messages[props.dialog.messages.length-1].text}</span>
        </NavLink>
    )
}

export default Companion;