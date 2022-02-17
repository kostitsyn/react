import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {getUserProfile} from '../../redux/profile-reducer';
import axios from 'axios';

class HeaderContainer extends React.Component {
    componentDidMount() {
        let userId, email, login = this.props.getUserProfile();
        debugger;
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuthenticated,
    login: state.auth.login,
    profile: state.profilePage.profile,
    userId: state.auth.userId
})

export default connect(mapStateToProps, {getUserProfile})(HeaderContainer);
