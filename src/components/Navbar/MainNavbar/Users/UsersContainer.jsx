import {connect} from 'react-redux';
import Users from './Users';
import {addFriendActionCreator, deleteFriendActionCreator} from '../../../../redux/friends-reducer';
import {setUsersAC} from '../../../../redux/users-reducer';

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
        friendsId: friendsId,
        users: state.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addFriend: (userId) => {
        dispatch(addFriendActionCreator(userId));
        },
        deleteFriend: (userId) => {
            dispatch(deleteFriendActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
