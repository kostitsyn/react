import {NavLink} from "react-router-dom";
import c from "./Companion.module.css";
import React from "react";

const Companion = ({dialog, userId}) => {
    let companion = dialog.user.id === userId ? dialog.companion : dialog.user;
    return (
        <NavLink to={`/messages/${dialog.id}`} className={navData => navData.isActive ? `${c.active} ${c.dialogItem}` : c.dialogItem}>
            <img src={companion.imgLink} alt='ava'/>
            <span className={c.companion}>{companion.username}</span>
            <span>{dialog.messages[dialog.messages.length-1].text}</span>
        </NavLink>
    )
}

export default Companion;