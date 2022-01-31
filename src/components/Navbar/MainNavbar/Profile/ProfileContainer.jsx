import React from 'react';
import axios from 'axios';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setUserProfile} from '../../../../redux/profile-reducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/profile/10`)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        friends: state.friendsPage.friends,
        users: state.users.users
    }

}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);