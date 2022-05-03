import React from 'react';
import UserContent from "./UserContent/UserContent";
import Content from "./Content/Content";
import c from "./Profile.module.css";
import Preloader from '../../../common/Preloader/Preloader';

const Profile = ({friends, users, userId, router, status, updateStatusText, saveStatus, profileOnPage, saveAvatar, img}) => {
    if (!profileOnPage) {
        return <Preloader />
    }
    return (
        <main className={c.profile}>
            <UserContent profile={profileOnPage} userId={userId} urlId={router.userId} img={img} saveAvatar={saveAvatar}/>
            <Content friends={friends} users={users} profile={profileOnPage}
            saveStatus={saveStatus} userId={userId} onURLid={router.userId}
            updateStatusText={updateStatusText} status={status}/>
        </main>
    )
}

export default Profile;