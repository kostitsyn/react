import React from 'react';
import c from './Friend.module.css';
import {NavLink} from "react-router-dom";

const Friend = ({deleteFriend, friend}) => {

    let removeFriend = (user_id) => {
        deleteFriend(user_id);
    }
    return (
        <div className={c.friend}>
            <NavLink to={`/profile/${friend.id}`} className={c.userLink}>
                <img src={friend.imgLink} alt='ava'/>
                <span className={c.friendName}>{friend.username}</span>
            </NavLink>
            <a href='#' className={c.writeMsg}>Написать сообщение</a>
            <button onClick={() => removeFriend(friend.id)}>Удалить из друзей</button>
        </div>
    )
}

export default Friend;