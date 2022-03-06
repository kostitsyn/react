import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {getUserProfile} from '../../redux/profile-reducer';
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

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.isAuth !== this.props.isAuth) {
            this.props.getUserProfile(nextProps.userId);
            return true;
        } else {
            return false;
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

export default connect(mapStateToProps, {getUserProfile, getAuthUserData, logout})(HeaderContainer);
