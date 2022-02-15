import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import axios from 'axios';
import {addFriend, deleteFriend} from '../../../../redux/friends-reducer';
import {changePage, toggleFollowingInProgress, getUsers} from '../../../../redux/users-reducer';
import {usersAPI} from '../../../../api/api';


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
               profile={this.props.profile}
               deleteFriend={this.props.deleteFriend}
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               users={this.props.users}
               friends={this.props.friends}
               changeUsersOnPage={this.changeUsersOnPage}
               isFetching={this.props.isFetching}
               followingInProgress={this.props.followingInProgress}
               toggleFollowingInProgress={this.props.toggleFollowingInProgress} />
        )

    }
}

let mapStateToProps = (state) => {
    debugger;
    let excludeCurrentUser = state.users.users.filter(u => u.id !== state.profilePage.profile.id);
    excludeCurrentUser.sort((a, b) => {
        if(a.name > b.name){
            return 1;
        } else if (a.name < b.name) {
            return -1;
        }
        return 0;
    });
    return {
        friends: state.friendsPage.friends,
        profile: state.profilePage.profile,
        users: state.users.users,
        currentPage: state.users.currentPage,
        totalUsersCount: state.users.totalUsersCount,
        pageSize: state.users.pageSize,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress,
    }
}

export default connect(mapStateToProps, {changePage,
                                        addFriend,
                                        deleteFriend,
                                        toggleFollowingInProgress, getUsers})(UsersContainer);
