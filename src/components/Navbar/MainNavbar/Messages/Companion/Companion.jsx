import {NavLink} from "react-router-dom";
import c from "../Messages.module.css";
import React from "react";

const Companion = (props) => {
    return (
        <NavLink to={`/messages/${props.id}`} className={navData => navData.isActive ? `${c.active} ${c.dialogItem}` : c.dialogItem}>
            <img src={props.imgLink} alt='ava'/>
            <span className={c.companion}>Фродо Бэггинс</span>
            <span>{props.name}</span>
        </NavLink>
    )
}

export default Companion;