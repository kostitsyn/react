import React from 'react';
import User from './User/User';
import c from './Users.module.css';
import axios from 'axios';

// const Users = (props) => {
//
//     let getUsers = () => {
//         if (props.excludeCurrentUser.length === 0) {
//             axios.get('http://127.0.0.1:8000/api/users/')
//             .then(response => {
//                 let users = response.data;
//                 props.setUsers(users);
//             })
//     }
//
//
//     }
//
//     let userElements = props.excludeCurrentUser.map(u => <User addFriend={props.addFriend}
//                                                                deleteFriend={props.deleteFriend}
//                                                                friends={props.friendsId}
//                                                                user={u} key={u.id} />);
//     return (
//         <div>
//             <button onClick={getUsers}>Get users</button>
//             <div className={c.users}>
//
//                 {userElements}
//             </div>
//         </div>
//     )
// }

class Users extends React.Component {

    getUserElements = () => {
        return this.props.excludeCurrentUser.map(u => <User addFriend={this.props.addFriend}
                                                               deleteFriend={this.props.deleteFriend}
                                                               friends={this.props.friendsId}
                                                               user={u} key={u.id} />)
   }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                this.props.setUsers(response.data);
            })
        this.getUserElements();
    }

    render () {
        return (
            <div>
                <div className={c.users}>

                    {this.getUserElements()}
                </div>
            </div>
        )
    }
}


export default Users;
