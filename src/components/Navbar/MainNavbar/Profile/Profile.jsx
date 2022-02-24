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
            <UserContent friends={props.friends} users={props.users} profile={props.profileOnPage}/>
            <Content friends={props.friends} users={props.users} profile={props.profileOnPage} statusText={props.statusText}
            saveStatus={props.saveStatus} userId={props.userId} updateStatusText={props.updateStatusText}/>
        </main>
    )
}

export default Profile;