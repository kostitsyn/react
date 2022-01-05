import React from 'react';
import UserContainer from './User/UserContainer';
import c from './Users.module.css';
import StoreContext from '../../../../StoreContext';

const Users = (props) => {
    return <StoreContext.Consumer>
    {store => {
        let state = store.getState();
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
        let userElements = excludeCurrentUser.map(u => <UserContainer dispatch={store.dispatch} user={u} friends={friendsId} key={u.id} />);
        return (
            <div className={c.users}>
                {userElements}
            </div>
        )
        }
    }
    </StoreContext.Consumer>
}

export default Users;