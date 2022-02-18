import React from 'react';
import c from '../../Friends/Friend/Friend.module.css';
import axios from 'axios';
import jQuery from 'jquery';
import {usersAPI} from '../../../../../api/api';
import {NavLink} from "react-router-dom";


const User = (props) => {

    let addFriend = (userId) => {
        props.addFriend(userId);

    }

    let deleteFriend = (userId) => {
        props.deleteFriend(userId);
    }
    return (
        <div className={c.friend}>
            <NavLink to={`/profile/${props.user.id}`} className={c.userLink}>
                <img src={props.user.imgLink} alt='ava'/>
                <span className={c.friendName}>{props.user.username}</span>
            </NavLink>
            <a href='#' className={c.writeMsg}>Написать сообщение</a>

            {props.isAuth
                ? (props.followed
                        ? <button disabled={props.followingInProgress.some(id => id===props.user.id)} onClick={() => deleteFriend(props.user.id)}>Удалить из друзей</button>
                        : <button disabled={props.followingInProgress.some(id => id===props.user.id)} onClick={() => addFriend(props.user.id)}>Добавить в друзья</button>
                    )
                : null
            }
            {}
        </div>

    )
}

export default User;