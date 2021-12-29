import React from 'react';
import c from './Messages.module.css';
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    return (
        <NavLink to={`/messages/${props.id}`} className={navData => navData.isActive ? `${c.active} ${c.dialogItem}` : c.dialogItem}>
            <img src={props.imgLink} alt='ava'/>
            <span className={c.companion}>Фродо Бэггинс</span>
            <span>{props.name}</span>
        </NavLink>
    )
}

const Messages = (props) => {

    let users = [
        {id: 1, name:"Фродо Бэггинс", imgLink:"https://1.bp.blogspot.com/--nN9E8LB86c/X7Ewn5GEGmI/AAAAAAAAGLc/ueRKDW39iUg_5uBBtUANVOv0jMsBufeIQCLcBGAsYHQ/s1280/Frodo%2BBaggins.png} alt='logo'"},
        {id: 2, name:"Лектер Ганнибал", imgLink:"https://s3.yugopolis.ru/media/media/cache/news/data/img/cdbb04ac08902ad689d7e0cd19585b33/107841.jpg"},
        {id: 3, name:"Немезис", imgLink:"https://s2.hostingkartinok.com/uploads/images/2012/08/617f0d57c28066df47b8d47c973d877d.jpg"}
    ]

    let userElements = users.map(u => <Dialog id={u.id} name={u.name} imgLink={u.imgLink} key={u.id} />)

    return (
        <div className={c.messages}>
            <div className={c.searchBlock}>
                <label htmlFor='searchField'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </label>
                <input id='searchField' className={c.searchField} />
                <div className={c.controlPanel}>
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M4.5 4.12c-2.93 3.22-1.37 8.19 2.92 12.5 4.2 4.21 9.4 5.8 12.47 2.93 1.68-1.57 1.44-4.34-.64-6.19-1.88-1.6-4.83-1.87-6.72-.1-.63-.54-1.17-1.17-1.75-1.76 1.63-1.7 1.62-4.68-.06-6.68-1.88-2.25-4.74-2.33-6.22-.7zm4.85 1.85c1.05 1.27 1.2 3.29-.05 4.46-.63.57-1.25.9 1.03 3.22 2.45 2.5 2.76 1.62 3.4.95 1-1.01 2.97-1.1 4.32.1 1.5 1.33 1.33 2.87.62 3.53-2.22 2.07-6.47.64-9.97-2.88-3.5-3.52-5.06-7.61-2.87-10.02.5-.56 2.1-1.05 3.52.64zM18.5 2c.5 0 .9.4.9.9v1.7h1.7a.9.9 0 010 1.8h-1.7v1.7a.9.9 0 11-1.8 0V6.4h-1.7a.9.9 0 010-1.8h1.7V2.9c0-.5.4-.9.9-.9z"></path></g></svg>
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill="currentColor" fill-rule="evenodd"><path d="M9.56 4.1h3.54a.9.9 0 110 1.8H9.6c-1 0-1.69 0-2.23.04-.52.05-.82.13-1.05.24a2.6 2.6 0 00-1.14 1.14c-.11.23-.2.53-.24 1.05-.04.54-.04 1.24-.04 2.23v3.8c0 1 0 1.69.04 2.23.05.52.13.82.24 1.05.25.49.65.89 1.14 1.14.23.11.53.2 1.05.24.54.04 1.24.04 2.23.04h3.8c1 0 1.69 0 2.23-.04.52-.05.82-.13 1.05-.24a2.6 2.6 0 001.14-1.14c.11-.23.2-.53.24-1.05.04-.54.04-1.24.04-2.23v-3.5a.9.9 0 011.8 0v3.54c0 .95 0 1.71-.05 2.33a4.5 4.5 0 01-.43 1.73 4.4 4.4 0 01-1.92 1.92 4.5 4.5 0 01-1.73.43c-.62.05-1.38.05-2.33.05H9.56c-.95 0-1.71 0-2.33-.05a4.5 4.5 0 01-1.73-.43 4.4 4.4 0 01-1.92-1.92 4.51 4.51 0 01-.43-1.73c-.05-.62-.05-1.38-.05-2.33v-3.88c0-.95 0-1.71.05-2.33.05-.64.16-1.2.43-1.73A4.4 4.4 0 015.5 4.58a4.51 4.51 0 011.73-.43c.62-.05 1.38-.05 2.33-.05z"></path><path d="M19.12 3.33a1.1 1.1 0 111.56 1.55l-.35.35a.4.4 0 01-.57 0l-.99-.99a.4.4 0 010-.56zm-.6 2.57l-.42-.42c-.44-.44-.72-.42-1.13 0l-5.13 5.12c-1.95 1.96-3.19 3.89-2.76 4.32.43.43 2.36-.8 4.32-2.76l5.12-5.13c.44-.44.42-.72 0-1.13z"></path></g></svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="more_horizontal_24__Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="more_horizontal_24__more_horizontal_24"><path id="more_horizontal_24__Bounds" d="M24 0H0v24h24z"></path><path d="M18 10a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2c0-1.1.9-2 2-2zm-6 4a2 2 0 01-2-2c0-1.1.9-2 2-2a2 2 0 012 2 2 2 0 01-2 2zm-6 0a2 2 0 01-2-2c0-1.1.9-2 2-2a2 2 0 012 2 2 2 0 01-2 2z" id="more_horizontal_24__Mask" fill="currentColor"></path></g></g></svg>
                </div>
            </div>
            <div className={c.dialogs}>
                {userElements}
            </div>
        </div>
    )
}

export default Messages;