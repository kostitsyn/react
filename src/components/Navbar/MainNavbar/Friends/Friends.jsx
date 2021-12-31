import React from 'react';
import Friend from "./Friend/Friend";
import c from './Friends.module.css'

const Friends = (props) => {
    let newArr = [];
    props.friends.forEach(f => newArr.push(f.user_id))
    let currentFriends = props.users.filter(u => {
        if(newArr.includes(u.id)) {
            return u;
        }
    })
    let friendElements = currentFriends.map(f => <Friend friend={f} key={f.id} />)
    return (
        <div className={c.friends}>
            <h2>Мои друзья:</h2>
            {friendElements}
        </div>
    )
}

export default Friends;