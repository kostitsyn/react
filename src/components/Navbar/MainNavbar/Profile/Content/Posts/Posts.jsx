import React from 'react';
import c from './Posts.module.css';
import PostItem from "./PostItem/PostItem";

const Posts = (props) => {

    let postElements = props.posts.map(p => <PostItem message={p.message} likes={p.likes} comments={p.comments} key={p.id} />)

    return (
        <div>
            <div className={c.addPost}>
                <label htmlFor='addPost'>Add post: </label>
                <textarea id='addPost'/>
                <button>Сохранить</button>
            </div>
            <div className={c.posts}>
                Posts:
                {postElements}
            </div>
        </div>
    )
}

export default Posts;