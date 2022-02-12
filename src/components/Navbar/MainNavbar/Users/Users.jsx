import React from 'react';
import User from './User/User';
import c from './Users.module.css';
import Preloader from '../../../common/Preloader/Preloader';

const Users = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    debugger;
    let excludeCurrentUser = props.users.filter(u => u.id !==props.profile.id)
    let userElements = excludeCurrentUser.map(u => <User addFriend={props.addFriend}
                                                               deleteFriend={props.deleteFriend}
                                                               followed={props.friends.includes(u.id)}
                                                               user={u} key={u.id} />);

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pageNumbers = [];
    for(let i=1; i<=pagesCount; ++i) {
        pageNumbers.push(i);
    }
    return (
        <>
            {props.isFetching ? <Preloader/> : null}
            <div>
                <div>
                    {pageNumbers.map(p => {
                        return <span onClick={(e) => props.changeUsersOnPage(p)} className={props.currentPage === p && c.selectedPage}>{p}</span>})}
                </div>
                <div className={c.users}>
                    {userElements}
                </div>
            </div>
        </>
    )
}


export default Users;
