import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getProfileOnPage, saveStatus} from '../../../../redux/profile-reducer';
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
            this.props.getProfileOnPage(this.props.profile, this.props.router.userId);
        }
    }

    render() {
        return <Profile {...this.props}/>
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        profileOnPage: state.profilePage.profileOnPage,
        friends: state.friendsPage.friends,
        users: state.users.users,
        userId: state.auth.userId,
        posts: state.profilePage.posts,
        status: state.profilePage.profile.aboutMe
    }

}

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getProfileOnPage, saveStatus})
)(ProfileContainer);
