import React from 'react';
import c from './MyPosts.module.css';
import PostItem from "./MyPostItem/MyPostItem";

const MyPosts = (props) => {
    let profileUserId;
    if (props.router.userId) {
        profileUserId = props.router.userId;
    } else {
        profileUserId = props.userId;
    }
    let currentUser = props.users.find(u => u.id === profileUserId);
    let userPosts = props.posts.filter(p => p.author === profileUserId);

    let postElements;
    if (userPosts) {
        postElements = userPosts.map(p => <PostItem message={p.message} likes={p.likes} currentUser={currentUser} comments={p.comments} key={p.id} />);
    } else {
        postElements = [];
    }
    let updatePostText = (event) => {
        let text = event.target.value;
        props.updatePostText(text);

    }
    let addPost = () => {
        props.addPost(props.currentUser.id);
    }

    return (
        <div>
            <div className={c.addPost}>
                <label htmlFor='addPost'>Add post: </label>
                <textarea onChange={updatePostText} value={props.newPostText} id='addPost'/>
                <button onClick={addPost}>Сохранить</button>
            </div>
            <div className={c.posts}>
                Posts:
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;