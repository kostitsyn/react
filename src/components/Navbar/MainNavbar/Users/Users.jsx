import React from 'react';
import UserContainer from './User/UserContainer';
import c from './Users.module.css';

const Users = (props) => {
    let state = props.store.getState();
    let friendsId = [];
    state.friendsPage.friends.forEach(f => friendsId.push(f.user_id));
    let excludeCurrentUser = state.users.filter(u => u.id !== 100);
    excludeCurrentUser.sort((a, b) => {
        if(a.name > b.name){
            return 1;
        } else if (a.name < b.name) {
            return -1;
        }
        return 0;
    });
    let userElements = excludeCurrentUser.map(u => <UserContainer dispatch={props.store.dispatch} user={u} friends={friendsId} key={u.id} />);
    return (
        <div className={c.users}>
            {userElements}
        </div>
    )
}



export default Users;