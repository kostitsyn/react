import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {getUserProfile} from '../../redux/profile-reducer';
import axios from 'axios';
import {usersAPI} from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUserProfile();
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

export default connect(mapStateToProps, {getUserProfile})(HeaderContainer);
