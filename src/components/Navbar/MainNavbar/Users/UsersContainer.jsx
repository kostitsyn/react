import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {addFriend, deleteFriend} from '../../../../redux/friends-reducer';
import {requestUsers} from '../../../../redux/users-reducer';
import {getFriends, getProfile, getUsers, getCurrentPage, getUsersCount, getPageSize, getIsFetching,
getFollowingInProgress, getIsAuth} from '../../../../redux/users-selectors';


class UsersContainer extends React.Component {

    componentDidMount() {
        let {pageSize, currentPage, requestUsers} = this.props;
        requestUsers(pageSize, currentPage);
    }

    changeUsersOnPage = (p) => {
        let {pageSize, requestUsers} = this.props;
        requestUsers(pageSize, p);
    }

    render () {
        return (
            <Users addFriend={this.props.addFriend}
               isAuth={this.props.isAuth}
               profile={this.props.profile}
               deleteFriend={this.props.deleteFriend}
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               users={this.props.users}
               friends={this.props.friends}
               changeUsersOnPage={this.changeUsersOnPage}
               isFetching={this.props.isFetching}
               followingInProgress={this.props.followingInProgress} />
        )

    }
}

// let mapStateToProps = (state) => {
//     return {
//         friends: state.friendsPage.friends,
//         profile: state.profilePage.profile,
//         users: state.users.users,
//         currentPage: state.users.currentPage,
//         totalUsersCount: state.users.totalUsersCount,
//         pageSize: state.users.pageSize,
//         isFetching: state.users.isFetching,
//         followingInProgress: state.users.followingInProgress,
//         isAuth: state.auth.isAuthenticated,
//     }
// }

let mapStateToProps = (state) => {
    return {
        friends: getFriends(state),
        profile: getProfile(state),
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getUsersCount(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state),
    }
}

export default connect(mapStateToProps, {addFriend, deleteFriend, requestUsers})(UsersContainer);
