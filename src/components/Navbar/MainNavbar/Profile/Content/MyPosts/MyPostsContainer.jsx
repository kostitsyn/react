import React from 'react';
import {addPost, updatePostText, getPosts} from "../../../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux';
import {withRouter} from '../../../../../../withRouter/withRouter';


class MyPostsContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.userId;
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.getPosts(userId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.router.userId !== prevProps.router.userId) {
            this.props.getPosts(this.props.userId);
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
let WithUrlDataContainerComponent = withRouter(MyPostsContainer);


export default withRouter(connect(mapStateToProps, {addPost, updatePostText, getPosts})(WithUrlDataContainerComponent));
