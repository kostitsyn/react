import React from 'react';
import Post from "./Post/Post";
import c from './MyPosts.module.css';


const MyPosts = (props) => {
    let postsElements = props.state.posts.map(p => <Post message={p.message} likeQuantity={p.likeQuantity} key={p.id} />);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        props.updateNewPostText(newPostElement.current.value);
    }

    return (
    <div className={c.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.state.newPostText} />
            </div>
            <div>
                <button onClick={addPost}>Добавить</button>
            </div>
        </div>
        <div className={c.posts}>
            {postsElements}
        </div>
    </div>
    )
}

export default MyPosts;