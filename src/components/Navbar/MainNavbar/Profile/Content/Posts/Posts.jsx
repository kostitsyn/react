import React from 'react';
import c from './Posts.module.css';
import PostItem from "./PostItem/PostItem";

const Posts = () => {

    let posts = [
        {id: 1, message: "Отдыхаю на Кубе", likes: 10, comments: 5},
        {id: 2, message: "Окончил обучение на GeekBrains", likes: 123, comments: 2},
        {id: 3, message: "Устроился на работу мечты", likes: 100000, comments: 3},
    ]

    let postElements = posts.map(p => <PostItem message={p.message} likes={p.likes} comments={p.comments} key={p.id} />)

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