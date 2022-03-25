import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Element} from '../common/FormsControls/FormsControls';
import {required, maxLengthCreator} from '../../utils/validators/validators';
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from '../../hoc/AuthRedirect';
import c from '../common/FormsControls/FormsControls.module.css';
import {createField} from '../common/FormsControls/FormsControls';


const Input = Element('input');
const maxLengthValidate20 = maxLengthCreator(20);


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Login', 'login', [required, maxLengthValidate20], Input)}
            {createField('Password', 'password', [required, maxLengthValidate20], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [], Input, {type: 'checkbox', id: 'rememberMe'}, true, 'Remember me')}
            {error && <div className={c.formSummary}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    if(props.isAuth) {
        return <Navigate to='/profile' />
    }
    const onSubmit = (formData) => {
        props.login(formData);
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {login})(Login);