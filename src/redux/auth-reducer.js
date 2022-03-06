import {authAPI} from '../api/api';
import {getUserProfile} from './profile-reducer';


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
            let spam = {...action.payload};
            debugger;
            return spam;
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuthenticated) => ({type: SET_AUTH_USER, payload: {userId, email, login, isAuthenticated}});


export const getAuthUserData = () => dispatch => {
    debugger;
    authAPI.getAuthData().then(response => {
        debugger;
        if (response.resultCode === 0) {
            let {userId, email, login} = response.data;
            dispatch(setAuthUserData(userId, email, login, true));
            dispatch(getUserProfile(userId));
        }
    })
}

export const login = ({login, password, rememberMe}) => {
    return (dispatch) => {
        authAPI.login(login, password, rememberMe).then(response => {
            if (response.resultCode === 0) {
                dispatch(getAuthUserData());

            }
        })
    }
}

export const logout = () => dispatch => {
    authAPI.logout().then(response => {
        dispatch(setAuthUserData(null, null, null, false));
    })
}
export default authReducer;