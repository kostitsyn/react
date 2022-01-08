import React from 'react';
import User from './User/User';
import c from './Users.module.css';

const Users = (props) => {

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
