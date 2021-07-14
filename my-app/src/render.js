import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateMessageText, updateNewPostText} from './redux/state';


export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage} updateMessageText={updateMessageText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
