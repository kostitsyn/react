import React from 'react';
import c from './Posts.module.css';
import PostItem from "./PostItem/PostItem";
import {addPostActionCreator, updatePostActionCreator} from "../../../../../../redux/profile-reducer";

const Posts = (props) => {
    let currentUser = props.currentUser;
    let userPosts = props.state.posts.filter(p => p.author === currentUser.id);
    let postElements = userPosts.map(p => <PostItem message={p.message} likes={p.likes} currentUser={currentUser} comments={p.comments} key={p.id} />);

    let updatePostText = (event) => {
        let text = event.target.value;
        props.dispatch(updatePostActionCreator(text));

    }

    let addPost = () => {
        props.dispatch(addPostActionCreator(currentUser.id));
    }

    return (
        <div>
            <div className={c.addPost}>
                <label htmlFor='addPost'>Add post: </label>
                <textarea onChange={updatePostText} value={props.state.newPostText} id='addPost'/>
                <button onClick={addPost}>Сохранить</button>
            </div>
            <div className={c.posts}>
                Posts:
                {postElements}
            </div>
        </div>
    )
}

export default Posts;