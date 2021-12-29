import React from 'react';
import UserContent from "./UserContent/UserContent";
import Content from "./Content/Content";
import c from "./Profile.module.css";

const Profile = (props) => {
    return (
        <main className={c.profile}>
            <UserContent/>
            <Content posts={props.posts}/>
        </main>
    )
}

export default Profile;