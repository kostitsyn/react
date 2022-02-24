import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getProfileOnPage} from '../../../../redux/profile-reducer';
import {withAuthRedirect} from "../../../../hoc/AuthRedirect";
import {withRouter} from '../../../../hoc/withRouter';
import {compose} from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.userId;
        this.props.getProfileOnPage(this.props.profile, userId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.router.userId !== prevProps.router.userId) {
            this.props.getProfileOnPage(this.props.profile);
        }
    }

    render() {
        return <Profile {...this.props} profileOnPage={this.props.profileOnPage}/>
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        profileOnPage: state.profilePage.profileOnPage,
        friends: state.friendsPage.friends,
        users: state.users.users,
        isAuth: state.auth.isAuthenticated,
        posts: state.profilePage.posts
    }

}

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getProfileOnPage})
)(ProfileContainer);
