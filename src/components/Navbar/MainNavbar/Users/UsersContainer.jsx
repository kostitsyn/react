import {connect} from 'react-redux';
import Users from './Users';
import {addFriendActionCreator, deleteFriendActionCreator} from '../../../../redux/friends-reducer';

let mapStateToProps = (state) => {
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
    return {
        excludeCurrentUser: excludeCurrentUser,
        friendsId: friendsId
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addFriend: (user_id) => {
        dispatch(addFriendActionCreator(user_id));
        },
        deleteFriend: (user_id) => {
            dispatch(deleteFriendActionCreator(user_id));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;