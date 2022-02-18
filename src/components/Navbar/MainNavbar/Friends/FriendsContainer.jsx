import {connect} from 'react-redux';
import Friends from './Friends';
import {deleteFriend} from '../../../../redux/friends-reducer';


let mapStateToProps = (state) => {
    let currentFriends = state.users.users.filter(u => {
        if(state.friendsPage.friends.includes(u.id)) {
            return u;
        }
    })
    return {
        currentFriends: currentFriends,
        isAuth: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, {deleteFriend})(Friends);
