import React from 'react';
import {addPost, getPosts} from "../../../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux';
import {withRouter} from '../../../../../../hoc/withRouter';
import {compose} from 'redux';
import {requestUsers} from '../../../../../../redux/users-reducer';


class MyPostsContainer extends React.Component {
    componentDidMount() {
        debugger;
        let {router, userId, getPosts, users, requestUsers} = this.props;
        router.userId ? getPosts(router.userId) : getPosts(userId);
        users.length === 0 && requestUsers();
    }

    componentDidUpdate(prevProps) {
        let {router, userId, getPosts} = this.props;
//         debugger;
//         router.userId ? getPosts(router.userId) : getPosts(userId);
//         if (router.userId !== prevProps.router.userId) {
//             router.userId
//             ? getPosts(router.userId)
//             : getPosts(userId);
//         }
    }

    render() {
        return <MyPosts {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        posts : state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        users: state.users.users,
        userId: state.auth.userId
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {addPost, getPosts, requestUsers})
)(MyPostsContainer);
