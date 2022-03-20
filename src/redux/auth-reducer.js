import {authAPI} from '../api/api';
import {getUserProfile, getProfileOnPage} from './profile-reducer';
import {stopSubmit} from 'redux-form';


const SET_AUTH_USER = 'SET_AUTH_USER';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthenticated: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {...action.payload};
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuthenticated) => ({type: SET_AUTH_USER, payload: {userId, email, login, isAuthenticated}});


export const getAuthUserData = () => dispatch => {
    authAPI.getAuthData().then(response => {
        if (response.resultCode === 0) {
            let {userId, email, login} = response.data;
            dispatch(setAuthUserData(userId, email, login, true));
            dispatch(getUserProfile(userId));
            dispatch(getProfileOnPage(null, userId));
        }
    })
}

export const login = ({login, password, rememberMe}) => {
    return (dispatch) => {
        authAPI.login(login, password, rememberMe).then(response => {
            if (response.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let message = response.messages.length > 0 ? response.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
        authAPI.getAuthToken(login, password, rememberMe);
    }
}

export const logout = () => dispatch => {
    authAPI.logout().then(response => {
        dispatch(setAuthUserData(null, null, null, false));
    })
}
export default authReducer;