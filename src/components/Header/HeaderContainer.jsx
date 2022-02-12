import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {setAuthUserData} from '../../redux/auth-reducer';
import {setUserProfile} from '../../redux/profile-reducer';
import {setFriends} from '../../redux/friends-reducer';
import axios from 'axios';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/auth/me/', {withCredentials: true})
            .then(response1 => {
                if (response1.data.resultCode === 0) {
                    let {userId, email, login} = response1.data.data;
                    axios.get(`http://127.0.0.1:8000/api/profile/${userId}/`)
                        .then(response2 => {
                            this.props.setUserProfile(response2.data);
                            this.props.setAuthUserData(userId, email, login);
                            this.props.setFriends(response2.data.friends);
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
