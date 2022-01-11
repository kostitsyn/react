import React from 'react';
import User from './User/User';
import c from './Users.module.css';
import axios from 'axios';

const Users = (props) => {
    if (props.excludeCurrentUser.length === 0) {
        axios.get('http://127.0.0.1:8000/api/users')
        .then(result => {
            let users = result.data;
            props.setUsers(users);
        })


    }

    let userElements = props.excludeCurrentUser.map(u => <User addFriend={props.addFriend}
                                                               deleteFriend={props.deleteFriend}
                                                               friends={props.friendsId}
                                                               user={u} key={u.id} />);
    return (
        <div className={c.users}>
            {userElements}
        </div>
    )
}

export default Users;
