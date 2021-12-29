import React from 'react';
import c from './Posts.module.css';
import PostItem from "./PostItem/PostItem";

const Posts = () => {

    let posts = [
        {id: 1, message: "Отдыхаю на Кубе", likes: 10, comments: 5},
        {id: 2, message: "Окончил обучение на GeekBrains", likes: 123, comments: 2},
        {id: 3, message: "Устроился на работу мечты", likes: 100000, comments: 3},
    ]

    return (
        <div>
            <div className={c.addPost}>
                <label htmlFor='addPost'>Add post: </label>
                <textarea id='addPost'/>
                <button>Сохранить</button>
            </div>
            <div className={c.posts}>
                Posts:
                <PostItem message={posts[0].message} likes={posts[0].likes} comments={posts[0].comments} />
                <PostItem message={posts[1].message} likes={posts[1].likes} comments={posts[1].comments} />
                <PostItem message={posts[2].message} likes={posts[2].likes} comments={posts[2].comments} />
            </div>
        </div>
    )
}

export default Posts;