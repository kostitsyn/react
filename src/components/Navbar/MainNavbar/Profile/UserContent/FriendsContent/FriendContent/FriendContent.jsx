import React from "react";
import c from './FriendContent.module.css';

const FriendContent = (props) => {
    return (
        <div className={c.friend}>
            <img src={props.friend.imgLink} alt='ava'/>
            <span>{props.friend.username}</span>
        </div>
    )
}

export default FriendContent;