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
    let currentUser = props.users.find(u => u.id === Number(profileUserId));
    let postElements = props.posts.map(p => <PostItem message={p.text} likes={p.likes} currentUser={currentUser} comments={p.comments} key={p.id} />);

    let updatePostText = (event) => {
        let text = event.target.value;
        props.updatePostText(text);

    }
    let addPost = () => {
        props.addPost(props.userId, props.newPostText);
    }
    return (
        <div>
            {!props.router.userId
            ?<div className={c.addPost}>
                <label htmlFor='addPost'>Add post: </label>
                <textarea onChange={updatePostText} value={props.newPostText} id='addPost'/>
                <button onClick={addPost}>Сохранить</button>
            </div>
            : undefined

            }

            <div className={c.posts}>
                Posts:
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;