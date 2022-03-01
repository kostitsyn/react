import {authAPI} from '../api/api';

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
            return {
                ...state,
                ...action.data,
                isAuthenticated: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_AUTH_USER, data: {userId, email, login}});


export const login = (data) => {
    return (dispatch) => {
        debugger;
        authAPI.login(data.login, data.password)
    }
}
export default authReducer;