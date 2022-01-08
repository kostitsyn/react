import React from 'react';
import c from './UserContent.module.css';
import FriendsContent from "./FriendsContent/FriendsContent";

const UserContent = (props) => {
    let state = props.store.getState();
    let currentUser = state.users.find(u => u.id === 100);
    debugger;
    return (
        <div className={c.userContent}>
            <div className={c.avatar}>
                <img src={currentUser.imgLink} alt='avatar'/>
            </div>
            <div>
                Presents
            </div>
            <div className={c.friends}>
                <FriendsContent friends={state.friendsPage.friends} users={state.users} />
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