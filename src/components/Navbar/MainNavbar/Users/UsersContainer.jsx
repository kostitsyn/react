import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {addFriend, deleteFriend} from '../../../../redux/friends-reducer';
import {getUsers} from '../../../../redux/users-reducer';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }

    changeUsersOnPage = (p) => {
        this.props.getUsers(this.props.pageSize, p);
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

let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        profile: state.profilePage.profile,
        users: state.users.users,
        currentPage: state.users.currentPage,
        totalUsersCount: state.users.totalUsersCount,
        pageSize: state.users.pageSize,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress,
        isAuth: state.auth.isAuthenticated,
    }
}

export default connect(mapStateToProps, {addFriend, deleteFriend, getUsers})(UsersContainer);
