import React from 'react';
import Friend from "./Friend/Friend";
import c from './Friends.module.css';
import {Navigate} from 'react-router-dom';
import Login from '../../../Login/Login';

const Friends = (props) => {
    let friendElements = props.currentFriends.map(f => <Friend deleteFriend={props.deleteFriend} friend={f} key={f.id} />)
    if (!props.isAuth) return <Navigate to='/login'/>
    return (
        <div className={c.friends}>
            <h2>Мои друзья:</h2>
            {friendElements}
        </div>
    )
}


export default Friends;