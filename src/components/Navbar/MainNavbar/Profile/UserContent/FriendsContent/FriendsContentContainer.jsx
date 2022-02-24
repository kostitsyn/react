import React from "react";
import FriendsContent from "./FriendsContent";
import c from './FriendsContent.module.css';
import Preloader from '../../../../../common/Preloader/Preloader';
import {connect} from 'react-redux';

class FriendsContentContainer extends React.Component {
    render() {
        return <FriendsContent {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    friends: state.friendsPage.friends,
    users: state.users.users,
})

export default connect(mapStateToProps, {})(FriendsContentContainer);