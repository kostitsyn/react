import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import {addPost, updatePost, addMessage, updateMessage, subscribe} from './redux/store';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let render = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
let state = store.getState();
render(state);
store.setSubscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
