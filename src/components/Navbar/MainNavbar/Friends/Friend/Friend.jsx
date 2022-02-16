import React from 'react';
import c from './Friend.module.css';
import {NavLink} from "react-router-dom";

const Friend = (props) => {

    let deleteFriend = (user_id) => {
        props.deleteFriend(user_id);
    }
    return (
        <div className={c.friend}>
            <NavLink to={`/profile/${props.friend.id}`} className={c.userLink}>
                <img src={props.friend.imgLink} alt='ava'/>
                <span className={c.friendName}>{props.friend.username}</span>
            </NavLink>
            <a href='#' className={c.writeMsg}>Написать сообщение</a>
            <button onClick={() => deleteFriend(props.friend.id)}>Удалить из друзей</button>
        </div>
    )
}

export default Friend;