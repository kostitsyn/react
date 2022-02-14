import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import axios from 'axios';
import {addFriend, deleteFriend} from '../../../../redux/friends-reducer';
import {setUsers, changePage, getTotalUsersCount, setToggle, toggleFollowingInProgress} from '../../../../redux/users-reducer';
import {usersAPI} from '../../../../api/api';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setToggle(true);
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
            this.props.setToggle(false);
            this.props.setUsers(data.results);
            this.props.getTotalUsersCount(data.count);
        })
    }

    changeUsersOnPage = (p) => {
        this.props.changePage(p);
        this.props.setToggle(true);
        usersAPI.getUsers(this.props.pageSize, p).then(data => {
            this.props.setToggle(false);
            this.props.setUsers(data.results);
        })
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

export default connect(mapStateToProps, {setUsers,
                                        changePage,
                                        getTotalUsersCount,
                                        setToggle,
                                        addFriend,
                                        deleteFriend,
                                        toggleFollowingInProgress})(UsersContainer);
