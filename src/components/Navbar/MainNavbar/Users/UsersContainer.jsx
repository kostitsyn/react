import {connect} from 'react-redux';
import Users from './Users';
import {addFriendActionCreator, deleteFriendActionCreator} from '../../../../redux/friends-reducer';
import {setUsersAC, changePageAC, getCountUsersAC} from '../../../../redux/users-reducer';

let mapStateToProps = (state) => {
    let friendsId = [];
    state.friendsPage.friends.forEach(f => friendsId.push(f.user_id));
    let excludeCurrentUser = state.users.users.filter(u => u.id !== 100);
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
        currentPage: state.users.currentPage,
        totalUsersCount: state.users.totalUsersCount,
        pageSize: state.users.pageSize
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
        },
        changePage: (pageNumber) => {
            dispatch(changePageAC(pageNumber));
        },
        getTotalUsersCount: (count) => {
            dispatch(getCountUsersAC(count));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
