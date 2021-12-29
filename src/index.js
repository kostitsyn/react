import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = {
    users: [
        {id: 1, name:"Фродо Бэггинс", imgLink:"https://1.bp.blogspot.com/--nN9E8LB86c/X7Ewn5GEGmI/AAAAAAAAGLc/ueRKDW39iUg_5uBBtUANVOv0jMsBufeIQCLcBGAsYHQ/s1280/Frodo%2BBaggins.png} alt='logo'"},
        {id: 2, name:"Лектер Ганнибал", imgLink:"https://s3.yugopolis.ru/media/media/cache/news/data/img/cdbb04ac08902ad689d7e0cd19585b33/107841.jpg"},
        {id: 3, name:"Немезис", imgLink:"https://s2.hostingkartinok.com/uploads/images/2012/08/617f0d57c28066df47b8d47c973d877d.jpg"}
    ],
    dialogs: [
        {id: 1, messages: [{id: 100, message: 'hello'}, {id: 1, message: 'you too'}, {id: 100, message: 'super'}]},
        {id: 2, messages: [{id: 2, message: 'good morning'}, {id: 100, message: 'you too'}, {id: 2, message: 'go home'}]},
        {id: 3, messages: [{id: 100, message: 'you sick'}, {id: 3, message: 'you too'}, {id: 100, message: 'fuck you'}]},
    ],
    posts: [
        {id: 1, message: "Отдыхаю на Кубе", likes: 10, comments: 5},
        {id: 2, message: "Окончил обучение на GeekBrains", likes: 123, comments: 2},
        {id: 3, message: "Устроился на работу мечты", likes: 100000, comments: 3},
    ]
}


ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
