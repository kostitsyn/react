import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Element} from '../common/FormsControls/FormsControls';
import {required, maxLengthCreator} from '../../utils/validators/validators';
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from '../../hoc/AuthRedirect';
import c from '../common/FormsControls/FormsControls.module.css';


const Input = Element('input');
const maxLengthValidate20 = maxLengthCreator(20);


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLengthValidate20]} name='login' placeholder='Login' component={Input}/>
            </div>
            <div>
                <Field validate={[required, maxLengthValidate20]} name='password' type="password" placeholder='Password' component={Input}/>
            </div>
            <div>
                <label htmlFor='rememberMe'>Remebmer me</label>
                <Field id='rememberMe' name='rememberMe' component='input' type='checkbox'/>
            </div>
            {props.error && <div className={c.formSummary}>{props.error}</div>}
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