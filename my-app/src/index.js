import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*let users = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Vitaliy'},
    {id: 4, name: 'Sergey'}
]

let messages = [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'Lorem ipsum dolores!'},
    {id: 3, message: 'Funk soul brother!'}
]*/


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
