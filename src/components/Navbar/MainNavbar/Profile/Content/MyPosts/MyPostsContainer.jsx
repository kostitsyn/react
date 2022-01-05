import React from 'react';
import PostItem from "./MyPostItem/MyPostItem";
import {addPostActionCreator, updatePostActionCreator} from "../../../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from '../../../../../../StoreContext';


const MyPostsContainer = (props) => {
    return <StoreContext.Consumer>
        {store => {
            let state = store.getState();
            let currentUser = state.users.find(u => u.id === 100);
            let userPosts = state.profilePage.posts.filter(p => p.author === currentUser.id);
            let postElements = userPosts.map(p => <PostItem message={p.message} likes={p.likes} currentUser={currentUser} comments={p.comments} key={p.id} />);

            let onUpdatePostText = (text) => {
                store.dispatch(updatePostActionCreator(text));
            }

            let onAddPost = () => {
                store.dispatch(addPostActionCreator(currentUser.id));
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
        }
    </StoreContext.Consumer>
}

export default MyPostsContainer;