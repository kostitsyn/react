import {connect} from 'react-redux';
import Friends from './Friends';
import {deleteFriend} from '../../../../redux/friends-reducer';


let mapStateToProps = (state) => {
    let newArr = [];
    state.friendsPage.friends.forEach(f => newArr.push(f.user_id))
    let currentFriends = state.users.users.filter(u => {
        if(newArr.includes(u.id)) {
            return u;
        }
    })
    return {
        currentFriends: currentFriends,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         deleteFriend: (user_id) => {
//             dispatch(deleteFriendActionCreator(user_id));
//         }
//     }
// }

export default connect(mapStateToProps, {deleteFriend})(Friends);
