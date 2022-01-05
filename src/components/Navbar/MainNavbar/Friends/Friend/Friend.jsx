import React from 'react';
import c from './Friend.module.css';

const Friend = (props) => {

    let deleteFriend = (user_id) => {
        props.deleteFriend(user_id);
    }
    return (
        <div className={c.friend}>
            <img src={props.friend.imgLink} alt='ava'/>
            <span className={c.friendName}>{props.friend.name}</span>
            <a href='#'>Написать сообщение</a>
            <button onClick={() => deleteFriend(props.friend.id)}>Удалить из друзей</button>
        </div>
    )
}

export default Friend;