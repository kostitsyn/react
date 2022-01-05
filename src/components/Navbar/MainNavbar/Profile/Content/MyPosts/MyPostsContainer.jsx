import React from 'react';
import PostItem from "./MyPostItem/MyPostItem";
import {addPostActionCreator, updatePostActionCreator} from "../../../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let currentUser = state.users.find(u => u.id === 100);
    debugger;
    let userPosts = state.profilePage.posts.filter(p => p.author === currentUser.id);
    let postElements = userPosts.map(p => <PostItem message={p.message} likes={p.likes} currentUser={currentUser} comments={p.comments} key={p.id} />);

    let onUpdatePostText = (text) => {
        props.store.dispatch(updatePostActionCreator(text));

    }

    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator(currentUser.id));
    }

    return (
        <MyPosts updatePostText={onUpdatePostText}
                 addPost={onAddPost}
                 userPosts={userPosts}
                 newPostText={state.profilePage.posts.newPostText}
                 currentUser={currentUser}
                 />
    )
}

export default MyPostsContainer;