import React from 'react';
import c from './MyPosts.module.css';
import PostItem from "./MyPostItem/MyPostItem";
import {Field, reduxForm} from 'redux-form';
import {required, maxLengthCreator} from '../../../../../../utils/validators/validators';
import {Element} from '../../../../../common/FormsControls/FormsControls';

const maxLengthValidator10 = maxLengthCreator(10);
const Textarea = Element('textarea');

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label htmlFor='addPost'>Add post: </label>
            <Field validate={[required, maxLengthValidator10]} name='text'
            placeholder='Введите текст записи' id='addPost' component={Textarea}/>
            <button>Сохранить</button>
        </form>
    )
}
const AddPostReduxForm = reduxForm({form: 'addPost'})(AddPostForm);

const MyPosts = (props) => {

    let profileUserId;
    if (props.router.userId) {
        profileUserId = props.router.userId;
    } else {
        profileUserId = props.userId;
    }
    let currentUser = props.users.find(u => u.id === Number(profileUserId));
    let postElements = props.posts.map(p => <PostItem message={p.text} likes={p.likes} currentUser={currentUser} comments={p.comments} key={p.id} />);

    let addPost = (formData) => {
        props.addPost(props.userId, formData.text);
    }
    return (
        <div>
            {!props.router.userId && <div className={c.addPost}></div>}
            <AddPostReduxForm onSubmit={addPost}/>
            <div className={c.posts}>
                Posts:
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;