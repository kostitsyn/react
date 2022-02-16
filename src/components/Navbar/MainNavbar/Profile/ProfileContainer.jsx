import React from 'react';
import axios from 'axios';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getProfileOnPage} from '../../../../redux/profile-reducer';
import {useParams} from 'react-router-dom';
import {usersAPI} from '../../../../api/api';

// const withRouter = WrappedComponent => props => {
//     const params = useParams();
//     return (<WrappedComponent {...props} params={params}/>);
// };

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let params = useParams();
      return (
        <Component {...props} router={ params }/>
      );
    }

    return ComponentWithRouterProp;
  }


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.userId;
        this.props.getProfileOnPage(this.props.profile, userId);
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
        users: state.users.users
    }

}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getProfileOnPage})(WithUrlDataContainerComponent);