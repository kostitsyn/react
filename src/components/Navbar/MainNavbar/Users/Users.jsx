import User from './User/User';
import c from './Users.module.css';

const Users = (props) => {
    let friendsId = [];
    props.friends.forEach(f => friendsId.push(f.user_id));
    let includeCurrentUser = props.users.filter(u => u.id !== 100);
    includeCurrentUser.sort((a, b) => {
        if(a.name > b.name){
            return 1;
        } else if (a.name < b.name) {
            return -1;
        }
        return 0;
    });
    let userElements = includeCurrentUser.map(u => <User dispatch={props.dispatch} user={u} friends={friendsId} key={u.id} />);
    return (
        <div className={c.users}>
            {userElements}
        </div>
    )
}

export default Users;