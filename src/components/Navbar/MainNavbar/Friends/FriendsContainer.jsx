import React from 'react';
import {connect} from 'react-redux';
import Friends from './Friends';
import {deleteFriend} from '../../../../redux/friends-reducer';
import {withAuthRedirect} from '../../../../hoc/AuthRedirect';
import {compose} from 'redux';
import {getDialogs} from '../../../../redux/dialogs-reducer';
import {requestUsers} from '../../../../redux/users-reducer';


class FriendsContainer extends React.Component {
    componentDidMount() {
        let {userId, getDialogs, requestUsers} = this.props
        getDialogs(userId);
        requestUsers();
    }

    render() {
        return <Friends {...this.props} />
    }
}

let mapStateToProps = (state) => {
    let currentFriends = state.users.users.filter(u => {
        if(state.friendsPage.friends.includes(u.id)) {
            return u;
        }
    });
    let existingDialogs = currentFriends.map(f => {
        for(let i=0; i<state.dialogsPage.dialogs.length; i++) {
            if (f.id === state.dialogsPage.dialogs[i].user.id || f.id === state.dialogsPage.dialogs[i].companion.id) {
                let friendId = (state.dialogsPage.dialogs[i].user.id === state.auth.userId)
                                ? state.dialogsPage.dialogs[i].companion.id
                                : state.dialogsPage.dialogs[i].user.id;
                let result = {friendId, dialogId: state.dialogsPage.dialogs[i].id}
                return result;
            }
        }
    })
    existingDialogs = existingDialogs.filter(f => !!f);
    return {
        currentFriends: currentFriends,
        userId: state.auth.userId,
        existingDialogs: existingDialogs
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {deleteFriend, getDialogs, requestUsers})
)(FriendsContainer);
