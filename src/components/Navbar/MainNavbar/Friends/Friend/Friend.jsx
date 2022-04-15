import React from 'react';
import c from './Friend.module.css';
import {NavLink} from "react-router-dom";

const Friend = ({deleteFriend, friend, existingDialogs}) => {
    let removeFriend = (user_id) => {
        deleteFriend(user_id);
    }
    let dialogId = existingDialogs.find(d => friend.id === d.friendId);
    dialogId = dialogId && dialogId.dialogId;
    return (
        <div className={c.friend}>
            <NavLink to={`/profile/${friend.id}`} className={c.userLink}>
                <img src={friend.imgLink} alt='ava'/>
                <span className={c.friendName}>{friend.username}</span>
            </NavLink>
            {dialogId ? <NavLink to={`/messages/${dialogId}`} className={c.writeMsg}>Написать сообщение</NavLink> : <span className={c.writeMsg}>Начать беседу</span>}

            <button onClick={() => removeFriend(friend.id)}>Удалить из друзей</button>
        </div>
    )
}

export default Friend;