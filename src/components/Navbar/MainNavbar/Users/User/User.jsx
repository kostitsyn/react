import React from 'react';
import c from '../../Friends/Friend/Friend.module.css';

const User = (props) => {


    let addFriend = (user_id) => {
        props.addFriend(user_id);
    }

    let deleteFriend = (user_id) => {
        props.deleteFriend(user_id);
    }

    return (
        <div className={c.friend}>
            <img src={props.user.imgLink} alt='ava'/>
            <span className={c.friendName}>{props.user.name}</span>
            <a href='#'>Написать сообщение</a>

            {props.friends.includes(props.user.id)
                ? <button onClick={() => deleteFriend(props.user.id)}>Удалить из друзей</button>
                : <button onClick={() => addFriend(props.user.id)}>Добавить в друзья</button>
            }

        </div>
    )
}

export default User;