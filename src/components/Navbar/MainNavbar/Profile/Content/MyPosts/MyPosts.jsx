import React from 'react';
import c from './MyPosts.module.css';
import PostItem from "./MyPostItem/MyPostItem";
import {Field, reduxForm} from 'redux-form';
import {required, maxLengthCreator} from '../../../../../../utils/validators/validators';
import {Element} from '../../../../../common/FormsControls/FormsControls';

const maxLengthValidator10 = maxLengthCreator(10);
const Textarea = Element('textarea');

const AddPostForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='addPost'>Add post: </label>
            <Field validate={[required, maxLengthValidator10]} name='text'
            placeholder='Введите текст записи' id='addPost' component={Textarea}/>
            <button>Сохранить</button>
        </form>
    )
}
const AddPostReduxForm = reduxForm({form: 'addPost'})(AddPostForm);

class MyPosts extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps != this.props;
    }

    render() {
        let profileUserId;
        if (this.props.router.userId) {
            profileUserId = this.props.router.userId;
        } else {
            profileUserId = this.props.userId;
        }
        let currentUser = this.props.users.find(u => u.id === Number(profileUserId));
        let postElements = this.props.posts.map(p => <PostItem message={p.text} likes={p.likes} currentUser={currentUser} comments={p.comments} key={p.id} />);

        let addPost = (formData) => {
            this.props.addPost(this.props.userId, formData.text);
        }
        return (
            <div>
                {!this.props.router.userId && <div className={c.addPost}></div>}
                <AddPostReduxForm onSubmit={addPost}/>
                <div className={c.posts}>
                    Posts:
                    {postElements}
                </div>
            </div>
        )
    }
}

export default MyPosts;