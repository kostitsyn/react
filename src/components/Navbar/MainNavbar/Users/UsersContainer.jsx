import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import axios from 'axios';
import {addFriend, deleteFriend} from '../../../../redux/friends-reducer';
import {setUsers, changePage, getTotalUsersCount, setToggle} from '../../../../redux/users-reducer';


class UsersContainer extends React.Component {

    componentDidMount() {
        let offset = this.props.pageSize * (this.props.currentPage-1);
        this.props.setToggle(true);
        axios.get(`http://127.0.0.1:8000/api/users/?limit=${this.props.pageSize}&offset=${offset}`)
            .then(response => {
                this.props.setToggle(false);
                this.props.setUsers(response.data.results);
                this.props.getTotalUsersCount(response.data.count);
            })
    }

    changeUsersOnPage = (p) => {
        let offset = this.props.pageSize * (p-1);
        this.props.changePage(p);
        this.props.setToggle(true);
        axios.get(`http://127.0.0.1:8000/api/users/?limit=${this.props.pageSize}&offset=${offset}`)
            .then(response => {
                this.props.setToggle(false);
                this.props.setUsers(response.data.results);
            })
    }

    render () {
        return (
            <Users addFriend={this.props.addFriend}
               deleteFriend={this.props.deleteFriend}
               friendsId={this.props.friendsId}
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               excludeCurrentUser={this.props.excludeCurrentUser}
               changeUsersOnPage={this.changeUsersOnPage}
               isFetching={this.props.isFetching} />
        )

    }
}

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
        currentPage: state.users.currentPage,
        totalUsersCount: state.users.totalUsersCount,
        pageSize: state.users.pageSize,
        isFetching: state.users.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addFriend: (userId) => {
//         dispatch(addFriendActionCreator(userId));
//         },
//         deleteFriend: (userId) => {
//             dispatch(deleteFriendActionCreator(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         changePage: (pageNumber) => {
//             dispatch(changePageAC(pageNumber));
//         },
//         getTotalUsersCount: (count) => {
//             dispatch(getCountUsersAC(count));
//         },
//         setToggle: (isFetching) => {
//             dispatch(setToggleAC(isFetching));
//         }
//     }
// }

export default connect(mapStateToProps, {setUsers, changePage, getTotalUsersCount, setToggle, addFriend, deleteFriend})(UsersContainer);
