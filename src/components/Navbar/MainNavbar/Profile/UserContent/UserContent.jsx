import React from 'react';
import c from './UserContent.module.css';
import FriendsContent from "./FriendsContent/FriendsContent";
import Preloader from '../../../../common/Preloader/Preloader';
import default_ava from '../../../../../assets/images/default_ava.png';

const UserContent = (props) => {
    debugger;
    return (
        <div className={c.userContent}>
            <div className={c.avatar}>
                {props.profile.user.imgLink
                ? <img src={props.profile.user.imgLink} alt='avatar'/>
                : <img src={default_ava} alt='avatar'/>}
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