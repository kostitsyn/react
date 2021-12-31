import React from 'react';
import c from './UserContent.module.css';
import FriendsContent from "./FriendsContent/FriendsContent";

const UserContent = (props) => {
    let me = props.users.find(u => u.id === 100);
    return (
        <div className={c.userContent}>
            <div className={c.avatar}>
                <img src={me.imgLink} alt='avatar'/>
            </div>
            <div>
                Presents
            </div>
            <div className={c.friends}>
                <FriendsContent friends={props.friends} users={props.users} />
            </div>
            <div>
                Friends online
            </div>
            <div>
                Subscriptions
            </div>
            <div>
                Video
            </div>
            <div>
                Audio
            </div>
        </div>
    )
}

export default UserContent;