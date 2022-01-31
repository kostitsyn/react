import React from 'react';
import c from './UserContent.module.css';
import FriendsContent from "./FriendsContent/FriendsContent";
import Preloader from '../../../../common/Preloader/Preloader';

const UserContent = (props) => {
    return (
        <div className={c.userContent}>
            <div className={c.avatar}>
                <img src={props.profile.userId.imgLink} alt='avatar'/>
            </div>
            <div>
                Presents
            </div>
            <div className={c.friends}>
                <FriendsContent {...props} />
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