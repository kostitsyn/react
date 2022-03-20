import React from 'react';
import UserContent from "./UserContent/UserContent";
import Content from "./Content/Content";
import c from "./Profile.module.css";
import Preloader from '../../../common/Preloader/Preloader';

const Profile = (props) => {
    if (!props.profileOnPage) {
        return <Preloader />
    }
    return (
        <main className={c.profile}>
            <UserContent friends={props.friends} users={props.users} profile={props.profileOnPage} userId={props.userId} urlId={props.router.userId}/>
            <Content friends={props.friends} users={props.users} profile={props.profileOnPage}
            saveStatus={props.saveStatus} userId={props.userId} onURLid={props.router.userId}
            updateStatusText={props.updateStatusText} status={props.status}/>
        </main>
    )
}

export default Profile;