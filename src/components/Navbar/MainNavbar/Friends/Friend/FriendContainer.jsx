import React from 'react';
import {deleteFriendActionCreator} from '../../../../../redux/friends-reducer';
import Friend from './Friend';

const FriendContainer = (props) => {
    let onDeleteFriend = (user_id) => {
        props.dispatch(deleteFriendActionCreator(user_id));
    }

    return (
        <Friend deleteFriend={onDeleteFriend} friend={props.friend} />
    )
}

export default FriendContainer;