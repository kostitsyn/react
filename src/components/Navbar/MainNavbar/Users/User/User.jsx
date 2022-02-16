import React from 'react';
import c from '../../Friends/Friend/Friend.module.css';
import axios from 'axios';
import jQuery from 'jquery';
import {usersAPI} from '../../../../../api/api';


const User = (props) => {

    let addFriend = (userId) => {
        props.addFriend(userId);

    }

    let deleteFriend = (userId) => {
        props.deleteFriend(userId);
    }
    return (
        <div className={c.friend}>
            <img src={props.user.imgLink} alt='ava'/>
            <span className={c.friendName}>{props.user.username}</span>
            <a href='#'>Написать сообщение</a>

            {props.followed
                ? <button disabled={props.followingInProgress.some(id => id===props.user.id)} onClick={() => deleteFriend(props.user.id)}>Удалить из друзей</button>
                : <button disabled={props.followingInProgress.some(id => id===props.user.id)} onClick={() => addFriend(props.user.id)}>Добавить в друзья</button>
            }
        </div>
    )
}

export default User;