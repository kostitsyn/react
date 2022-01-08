import React from 'react';
import PostItem from "./MyPostItem/MyPostItem";
import {addPostActionCreator, updatePostActionCreator} from "../../../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    let currentUser = state.users.find(u => u.id === 100);
    let userPosts = state.profilePage.posts.filter(p => p.author === currentUser.id);
    return {
        userPosts : userPosts,
        newPostText: state.profilePage.newPostText,
        currentUser: currentUser
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updatePostText: (text) => {
            dispatch(updatePostActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator(100));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
