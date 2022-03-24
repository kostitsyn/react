import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {getUserProfile, getPosts} from '../../redux/profile-reducer';
import {getAuthUserData} from '../../redux/auth-reducer';
import {logout} from '../../redux/auth-reducer';
import Cookies from "universal-cookie";

class HeaderContainer extends React.Component {
    componentDidMount() {
        if (this.props.isAuth) {
            this.props.getUserProfile(this.props.userId);
        }
        const cookies = new Cookies();
        let rememberMe = cookies.get('rememberMe');
        Boolean(rememberMe) && this.props.getAuthUserData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.isAuth && (prevProps.userId !== this.props.userId)) {
            this.props.getUserProfile(this.props.userId);
        }
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuthenticated,
        login: state.auth.login,
        profile: state.profilePage.profile,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, {getUserProfile, getAuthUserData, logout, getPosts})(HeaderContainer);
