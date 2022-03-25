import React from 'react';
import c from '../../Friends/Friend/Friend.module.css';
import axios from 'axios';
import jQuery from 'jquery';
import {usersAPI} from '../../../../../api/api';
import {NavLink} from "react-router-dom";


const User = ({user, isAuth, followed, addFriend, deleteFriend, followingInProgress}) => {

    let setFriend = (userId) => {
        addFriend(userId);

    }

    let removeFriend = (userId) => {
        deleteFriend(userId);
    }
    return (
        <div className={c.friend}>
            <NavLink to={`/profile/${user.id}`} className={c.userLink}>
                <img src={user.imgLink} alt='ava'/>
                <span className={c.friendName}>{user.username}</span>
            </NavLink>
            <a href='#' className={c.writeMsg}>Написать сообщение</a>

            {isAuth
                ? (followed
                        ? <button disabled={followingInProgress.some(id => id===user.id)} onClick={() => removeFriend(user.id)}>Удалить из друзей</button>
                        : <button disabled={followingInProgress.some(id => id===user.id)} onClick={() => setFriend(user.id)}>Добавить в друзья</button>
                    )
                : null
            }
            {}
        </div>

    )
}

export default User;