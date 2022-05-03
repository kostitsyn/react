import React from 'react';
import c from './UserContent.module.css';
import FriendsContentContainer from "./FriendsContent/FriendsContentContainer";
import Preloader from '../../../../common/Preloader/Preloader';
import Avatar from '../../../../common/Avatar/Avatar';

const UserContent = ({profile, userId, urlId, saveAvatar, img}) => {
    if ((userId !== profile.id) && !urlId) {
        return <Preloader />
    }
    const changeAvatar = e => {
        if (e.target.files.length){
            saveAvatar(e.target.files[0])
        }

    }
    return (
        <div className={c.userContent}>
            <div className={c.avatar}>
                <Avatar user={profile.user} img={img}/>
            </div>
            <input type={'file'} onChange={changeAvatar}/>
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