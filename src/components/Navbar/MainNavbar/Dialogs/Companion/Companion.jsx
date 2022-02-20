import {NavLink} from "react-router-dom";
import c from "./Companion.module.css";
import React from "react";

const Companion = (props) => {
    return (
        <NavLink to={`/messages/${props.companion.id}`} className={navData => navData.isActive ? `${c.active} ${c.dialogItem}` : c.dialogItem}>
            <img src={props.companion.imgLink} alt='ava'/>
            <span className={c.companion}>{props.companion.username}</span>

        </NavLink>
    )
}

export default Companion;