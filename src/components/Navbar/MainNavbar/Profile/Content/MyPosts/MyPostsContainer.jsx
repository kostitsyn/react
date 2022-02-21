import React from 'react';
import PostItem from "./MyPostItem/MyPostItem";
import {addPost, updatePostText} from "../../../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    debugger;
    let currentUser = state.users.users.find(u => u.id === state.auth.userId);
    let userPosts = state.profilePage.posts.filter(p => p.author === currentUser.id);
    return {
        userPosts : userPosts,
        newPostText: state.profilePage.newPostText,
        currentUser: currentUser
    }
}

export default connect(mapStateToProps, {addPost, updatePostText})(MyPosts);
