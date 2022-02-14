import React from 'react';
import c from '../../Friends/Friend/Friend.module.css';
import axios from 'axios';
import jQuery from 'jquery';
import {usersAPI} from '../../../../../api/api';

const User = (props) => {

//     function getCookie(name) {
//         var cookieValue = null;
//         if (document.cookie && document.cookie !== '') {
//             var cookies = document.cookie.split(';');
//             for (var i = 0; i < cookies.length; i++) {
//                 var cookie = jQuery.trim(cookies[i]);
//                 if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                     cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                     break;
//                 }
//             }
//         }
//         return cookieValue;
//     }

    let addFriend = (userId) => {
        props.toggleFollowingInProgress(true, userId);
        usersAPI.addFriend(userId).then(data => {
            if (data.resultCode === 0) {
                props.addFriend(data.data.id);
            }
            props.toggleFollowingInProgress(false, userId);
        })
    }

    let deleteFriend = (userId) => {
        props.toggleFollowingInProgress(true, userId);
        usersAPI.deleteFriend(userId).then(data => {
            if (data.resultCode === 0) {
                props.deleteFriend(data.data.id);
            }
            props.toggleFollowingInProgress(false, userId);
        })
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