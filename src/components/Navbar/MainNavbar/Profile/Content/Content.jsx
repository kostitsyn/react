import React from 'react';
import c from './Content.module.css';
import Posts from "./Posts/Posts";
import ContentHeader from "./ContentHeader/ContentHeader";

const Content = (props) => {
    let me = props.store.getState().users.find(u => u.id === 100);
    return (
        <div className={c.content}>
            <ContentHeader me={me} />
            <div>User information</div>
            <div>User data</div>
            <div>User photos</div>
            <Posts store={props.store} currentUser={me} />
        </div>
    )
}

export default Content;