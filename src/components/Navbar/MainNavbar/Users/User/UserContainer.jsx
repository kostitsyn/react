import React from 'react';
import c from '../../Friends/Friend/Friend.module.css';
import {addFriendActionCreator, deleteFriendActionCreator} from '../../../../../redux/friends-reducer';
import User from './User';

const UserContainer = (props) => {

    let onAddFriend = (user_id) => {
        props.dispatch(addFriendActionCreator(user_id))
    }

    let onDeleteFriend = (user_id) => {
        props.dispatch(deleteFriendActionCreator(user_id));
    }

    return (
        <User addFriend={onAddFriend} deleteFriend={onDeleteFriend} user={props.user} friends={props.friends} />
    )
}

export default UserContainer;