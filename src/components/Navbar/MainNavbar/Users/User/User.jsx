import React from 'react';
import c from '../../Friends/Friend/Friend.module.css';
import axios from 'axios';

const User = (props) => {

    let addFriend = (userId) => {
        axios.post(`http://127.0.0.1:8000/api/follow/${userId}/`, {},
            {withCredentials: true,
                headers: {
                    'X-API-Key': '9vUGCylD.0cj4SIXHhTRnaJ4o5xauz8nfmIvVllRP'
                }})
                .then(response => {
                    debugger;
                    props.addFriend(response.userId);
                })

    }
// 9vUGCylD.0cj4SIXHhTRnaJ4o5xauz8nfmIvVllRP
    let deleteFriend = (userId) => {
        axios.delete(`http://127.0.0.1:8000/api/follow/${userId}/`,
            {withCredentials: true,
            headers: {
                'X-API-Key': '9vUGCylD.0cj4SIXHhTRnaJ4o5xauz8nfmIvVllRP'
            }})
                .then(response => {
                    debugger;
                    props.deleteFriend(userId);
                })

    }
    return (
        <div className={c.friend}>
            <img src={props.user.imgLink} alt='ava'/>
            <span className={c.friendName}>{props.user.username}</span>
            <a href='#'>Написать сообщение</a>

            {props.friends.includes(props.user.id)
                ? <button onClick={() => deleteFriend(props.user.id)}>Удалить из друзей</button>
                : <button onClick={() => addFriend(props.user.id)}>Добавить в друзья</button>
            }
        </div>
    )
}

export default User;