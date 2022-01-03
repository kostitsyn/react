import React from 'react';
import UserContent from "./UserContent/UserContent";
import Content from "./Content/Content";
import c from "./Profile.module.css";

const Profile = (props) => {
    return (
        <main className={c.profile}>
            <UserContent friends={props.store.getState().friends} users={props.store.getState().users}/>
            <Content store={props.store}/>
        </main>
    )
}

export default Profile;