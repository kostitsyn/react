import React from 'react';
import UserContent from "./UserContent/UserContent";
import Content from "./Content/Content";
import c from "./Profile.module.css";
import Preloader from '../../../common/Preloader/Preloader';

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <main className={c.profile}>
            <UserContent friends={props.friends} users={props.users} profile={props.profile}/>
            <Content friends={props.friends} users={props.users} profile={props.profile}/>
        </main>
    )
}

export default Profile;