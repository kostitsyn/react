import React from 'react';
import UserContent from "./UserContent/UserContent";
import Content from "./Content/Content";
import c from "./Profile.module.css";

const Profile = (props) => {
    return (
        <main className={c.profile}>
            <UserContent friends={props.state.friends} users={props.state.users}/>
            <Content state={props.state} addPost={props.addPost} updatePost={props.updatePost}/>
        </main>
    )
}

export default Profile;