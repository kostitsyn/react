import React from 'react';
import c from '../../Friends/Friend/Friend.module.css';
import axios from 'axios';
import jQuery from 'jquery';

const User = (props) => {

    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }


    let addFriend = (userId) => {
        let csrftoken = getCookie('csrftoken');
        axios.post(`http://127.0.0.1:8000/api/follow/${userId}/`, {},
            {
                withCredentials: true,
                headers: {"x-csrftoken": csrftoken}
            })
                .then(response => {
                    debugger;
                    if (response.data.resultCode === 0) {
                        debugger;
                        props.addFriend(response.data.data.id);
                    }
                })
    }

    let deleteFriend = (userId) => {
        let csrftoken = getCookie('csrftoken');
        axios.delete(`http://127.0.0.1:8000/api/follow/${userId}/`,
            {
                withCredentials: true,
                headers: {"x-csrftoken": csrftoken}
            })
                .then(response => {
                    if (response.data.resultCode === 0) {
                        props.deleteFriend(response.data.data.id);
                    }
                })
    }
    return (
        <div className={c.friend}>
            <img src={props.user.imgLink} alt='ava'/>
            <span className={c.friendName}>{props.user.username}</span>
            <a href='#'>Написать сообщение</a>

            {props.followed
                ? <button onClick={() => deleteFriend(props.user.id)}>Удалить из друзей</button>
                : <button onClick={() => addFriend(props.user.id)}>Добавить в друзья</button>
            }
        </div>
    )
}

export default User;