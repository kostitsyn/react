import React from 'react';
import FriendContainer from "./Friend/FriendContainer";
import c from './Friends.module.css';
import StoreContext from '../../../../StoreContext';

const Friends = (props) => {
    return <StoreContext.Consumer>
            {store => {
            let state = store.getState();
            let newArr = [];
            state.friendsPage.friends.forEach(f => newArr.push(f.user_id))
            let currentFriends = state.users.filter(u => {
                if(newArr.includes(u.id)) {
                    return u;
                }
            })
            let friendElements = currentFriends.map(f => <FriendContainer dispatch={store.dispatch} friend={f} key={f.id} />)
            return (
                <div className={c.friends}>
                    <h2>Мои друзья:</h2>
                    {friendElements}
                </div>
            )
        }
    }
    </StoreContext.Consumer>

}

export default Friends;