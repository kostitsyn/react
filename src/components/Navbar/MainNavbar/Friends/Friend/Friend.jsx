import React from 'react';
import c from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={c.friend}>
            <img src={props.friend.imgLink} alt='ava'/>
                <span className={c.friendName}>{props.friend.name}</span>
                <a href='#'>Написать сообщение</a>
        </div>
    )
}

export default Friend;