import React from 'react';
import axios from 'axios';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setUserProfile} from '../../../../redux/profile-reducer';
import {useParams} from 'react-router-dom';

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
        if (!userId) {
            userId = 1;
        }
//         axios.get(`http://127.0.0.1:8000/api/profile/${userId}`)
//             .then(response => {
//                 this.props.setUserProfile(response.data)
//             });
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);