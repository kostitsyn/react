import React from 'react';
import c from './MyPosts.module.css';
import PostItem from "./MyPostItem/MyPostItem";

const MyPosts = (props) => {
    let postElements = props.userPosts.map(p => <PostItem message={p.message} likes={p.likes} currentUser={props.currentUser} comments={p.comments} key={p.id} />);

    let updatePostText = (event) => {
        let text = event.target.value;
        props.updatePostText(text);

    }

    let addPost = () => {
        props.addPost(100);
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