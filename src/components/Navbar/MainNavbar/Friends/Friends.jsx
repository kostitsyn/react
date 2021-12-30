import React from 'react';
import Friend from "./Friend/Friend";
import c from './Friends.module.css'

const Friends = (props) => {
    let friendElements = props.friends.map(f => <Friend friend={f} key={f.key} />)
    return (
        <div className={c.friends}>
            <h2>Мои друзья:</h2>
            {friendElements}
        </div>
    )
}

export default Friends;