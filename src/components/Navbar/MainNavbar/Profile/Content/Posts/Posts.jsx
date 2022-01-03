import React from 'react';
import c from './Posts.module.css';
import PostItem from "./PostItem/PostItem";

const Posts = (props) => {
    let currentUser = props.currentUser;
    let userPosts = props.state.posts.filter(p => p.author === currentUser.id);
    let postElements = userPosts.map(p => <PostItem message={p.message} likes={p.likes} currentUser={currentUser} comments={p.comments} key={p.id} />);

    let newPostElement = React.createRef();

    let updatePostText = () => {
        let text = newPostElement.current.value;
        let action = {
            type: "UPDATE-POST",
            text: text
        }
        props.dispatch(action);

    }

    let addPost = () => {
        let action = {
            type: "ADD-POST",
            author_id: currentUser.id
        }
        props.dispatch(action);
    }

    return (
        <div>
            <div className={c.addPost}>
                <label htmlFor='addPost'>Add post: </label>
                <textarea onChange={updatePostText} value={props.state.newPostText} ref={newPostElement} id='addPost'/>
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