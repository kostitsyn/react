import React from 'react';
import c from './UserContent.module.css';
import FriendsContentContainer from "./FriendsContent/FriendsContentContainer";
import default_ava from '../../../../../assets/images/default_ava.png';
import Preloader from '../../../../common/Preloader/Preloader';

const UserContent = (props) => {
    debugger;
    if ((props.userId !== props.profile.id) && !props.urlId) {
        return <Preloader />
    }
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
                <FriendsContentContainer />
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