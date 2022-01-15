import React from 'react';
import User from './User/User';
import c from './Users.module.css';
import axios from 'axios';

class Users extends React.Component {

    componentDidMount() {
        let offset = this.props.pageSize * (this.props.currentPage-1);
        axios.get(`http://127.0.0.1:8000/api/users/?limit=${this.props.pageSize}&offset=${offset}`)
            .then(response => {
                this.props.setUsers(response.data.results);
                this.props.getTotalUsersCount(response.data.count);
            })
    }

    changeUsersOnPage = (p) => {
        let offset = this.props.pageSize * (p-1);
        this.props.changePage(p);
        axios.get(`http://127.0.0.1:8000/api/users/?limit=${this.props.pageSize}&offset=${offset}`)
            .then(response => {
                this.props.setUsers(response.data.results);
            })
    }

    render () {
        let userElements = this.props.excludeCurrentUser.map(u => <User addFriend={this.props.addFriend}
                                                               deleteFriend={this.props.deleteFriend}
                                                               friends={this.props.friendsId}
                                                               user={u} key={u.id} />);

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pageNumbers = [];
        for(let i=1; i<=pagesCount; ++i) {
            pageNumbers.push(i);
        }

        return (
            <div>
                <div>
                    {pageNumbers.map(p => {
                        return <span onClick={(e) => this.changeUsersOnPage(p)} className={this.props.currentPage === p && c.selectedPage}>{p}</span>})}

                </div>
                <div className={c.users}>
                    {userElements}
                </div>
            </div>
        )
    }
}


export default Users;
