import React from 'react';
import c from './Posts.module.css';
import PostItem from "./PostItem/PostItem";

const Posts = () => {
    return (
        <div>
            <div className={c.addPost}>
                <label htmlFor='addPost'>Add post: </label>
                <textarea id='addPost'/>
                <button>Сохранить</button>
            </div>
            <div className={c.posts}>
                Posts:
                <PostItem message='Отдыхаю на Кубе' likes='10' comments='5' />
                <PostItem message='Окончил обучение на GeekBrains' likes='123' comments='2' />
                <PostItem message='Устроился на работу мечты' likes='100000' comments='3' />
            </div>
        </div>
    )
}

export default Posts;