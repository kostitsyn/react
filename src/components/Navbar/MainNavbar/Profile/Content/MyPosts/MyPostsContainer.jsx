import React from 'react';
import {addPost, getPosts} from "../../../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux';
import {withRouter} from '../../../../../../hoc/withRouter';
import {compose} from 'redux';
import {requestUsers} from '../../../../../../redux/users-reducer';


class MyPostsContainer extends React.Component {
    componentDidMount() {
        this.props.router.userId
        ? this.props.getPosts(this.props.router.userId)
        : this.props.getPosts(this.props.userId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.router.userId !== prevProps.router.userId) {
            this.props.router.userId
            ? this.props.getPosts(this.props.router.userId)
            : this.props.getPosts(this.props.userId);
        }
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
