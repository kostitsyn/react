import React from 'react';
import User from './User/User';
import c from './Users.module.css';

const Users = (props) => {
    let userElements = props.excludeCurrentUser.map(u => <User addFriend={props.addFriend}
                                                               deleteFriend={props.deleteFriend}
                                                               friends={props.friendsId}
                                                               user={u} key={u.id} />);

        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

        let pageNumbers = [];
        for(let i=1; i<=pagesCount; ++i) {
            pageNumbers.push(i);
        }

        return (
            <div>
                <div>
                    {pageNumbers.map(p => {
                        return <span onClick={(e) => props.changeUsersOnPage(p)} className={props.currentPage === p && c.selectedPage}>{p}</span>})}
                </div>
                <div className={c.users}>
                    {userElements}
                </div>
            </div>
        )
}


export default Users;
