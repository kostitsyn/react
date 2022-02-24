import {connect} from 'react-redux';
import Friends from './Friends';
import {deleteFriend} from '../../../../redux/friends-reducer';
import {withAuthRedirect} from '../../../../hoc/AuthRedirect';
import {compose} from 'redux';


let mapStateToProps = (state) => {
    let currentFriends = state.users.users.filter(u => {
        if(state.friendsPage.friends.includes(u.id)) {
            return u;
        }
    })
    return {
        currentFriends: currentFriends,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {deleteFriend})
)(Friends);
