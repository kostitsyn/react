import React from 'react';
import c from './Content.module.css';
import Posts from "./Posts/Posts";

const Content = () => {
    return (
        <div className={c.content}>
            <div>Content header</div>
            <div>User information</div>
            <div>User data</div>
            <div>User photos</div>
            <Posts />
        </div>
    )
}

export default Content;