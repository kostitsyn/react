import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {setAuthUserData} from '../../redux/auth-reducer';
import {setUserProfile} from '../../redux/profile-reducer';
import {setFriends} from '../../redux/friends-reducer';
import axios from 'axios';
import {usersAPI} from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPI.getAuthData().then(data1 => {
            if (data1.resultCode === 0) {
                let {userId, email, login} = data1.data;
                usersAPI.getProfile(userId).then(data2 => {
                    this.props.setUserProfile(data2);
                    this.props.setAuthUserData(userId, email, login);
                    this.props.setFriends(data2.friends);
                })
            }
        })
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuthenticated,
    login: state.auth.login,
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setAuthUserData, setUserProfile, setFriends})(HeaderContainer);
