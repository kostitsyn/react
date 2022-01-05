import React from 'react';
import c from './Content.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ContentHeader from "./ContentHeader/ContentHeader";

const Content = (props) => {
        let state = props.store.getState();
        let currentUser = state.users.find(u => u.id === 100);
        return (
        <div className={c.content}>
            <ContentHeader currentUser={currentUser} />
            <div>User information</div>
            <div>User data</div>
            <div>User photos</div>
            <MyPostsContainer/>
        </div>
    )
}

export default Content;