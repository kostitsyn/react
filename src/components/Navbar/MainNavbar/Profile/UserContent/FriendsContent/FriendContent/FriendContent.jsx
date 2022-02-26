import React from "react";
import c from './FriendContent.module.css';
import {NavLink} from "react-router-dom";

const FriendContent = (props) => {
    return (
        <div className={c.friend}>
            <NavLink to={`/profile/${props.friend.id}`}>
                <img src={props.friend.imgLink} alt='ava'/>
                <span>{props.friend.username}</span>
            </NavLink>
        </div>
    )
}

export default FriendContent;