import React from 'react';
import User from './User/User';
import c from './Users.module.css';
import Preloader from '../../../common/Preloader/Preloader';
import Paginator from '../../../common/Paginator/Paginator';

const Users = ({profile, users, isAuth, totalUsersCount, friends, pageSize, currentPage, isFetching,
                addFriend, deleteFriend, followingInProgress, changeUsersOnPage}) => {
    let allUsers;
    if (!profile) {
        allUsers = users;
    } else {
        allUsers = users.filter(u => u.id !== profile.id);
    }


let userElements = allUsers.map(u => <User  addFriend={addFriend}
                                         deleteFriend={deleteFriend}
                                         followed={friends.includes(u.id)}
                                         followingInProgress={followingInProgress}
                                         user={u}
                                         isAuth={isAuth}
                                         key={u.id} />);


    return (
        <>
            {isFetching
            ? <Preloader/>
            : <div>
                <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                currentPage={currentPage} changeUsersOnPage={changeUsersOnPage}/>
                <div className={c.users}>
                    {userElements}
                </div>
            </div>
            }


        </>
    )
}


export default Users;
