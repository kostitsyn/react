import {usersAPI, authAPI} from '../api/api';
import {setAuthUserData} from './auth-reducer';
import {setFriends} from './friends-reducer';

const SAVE_POST = 'SAVE_POST';
const UPDATE_POST = 'UPDATE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_ON_PAGE = 'SET_PROFILE_ON_PAGE';
const SET_POSTS = 'SET_POSTS';


let initialState = {
            newPostText: '',
            posts: [],
            profile: null,
            profileOnPage: null
        }

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case SAVE_POST: {
            return {...state, posts: [...state.posts, action.newPost], newPostText: ''};
        }
        case UPDATE_POST: {
            return {...state, newPostText: action.text};
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_PROFILE_ON_PAGE:
            return {...state, profileOnPage: action.profile};
        case SET_POSTS:
            return {...state, posts: action.posts};
        default:
            return state;
    }
}

export const updatePostText = (text) => ({type: UPDATE_POST, text});
export const savePost = (newPost) => ({type: SAVE_POST, newPost});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setProfileOnPage = (profile) => ({type: SET_PROFILE_ON_PAGE, profile});
export const setPosts = (posts) => ({type: SET_POSTS, posts});

export default profileReducer;

export const getUserProfile = (userId) => {
    return (dispatch) => {
        authAPI.getAuthData().then(data1 => {
            if (data1.resultCode === 0) {
                let {userId, email, login} = data1.data;
                usersAPI.getProfile(userId).then(data2 => {
                    dispatch(setUserProfile(data2));
                    dispatch(setAuthUserData(userId, email, login));
                    dispatch(setFriends(data2.friends));
                })
            }
        })
    }
}

export const getProfileOnPage = (profile, userId=null) => {
    return (dispatch) => {
        if (userId) {
            usersAPI.getProfile(userId).then(data => {
                dispatch(setProfileOnPage(data));
        })
        }else {
            dispatch(setProfileOnPage(profile));
        }
    }
}

export const getPosts = (userId) => {
    return (dispatch) => {
        usersAPI.getPosts(userId).then(data => {
            dispatch(setPosts(data));
        })
    }
}

export const addPost = (userId, text) => {
    return (dispatch) => {
        debugger;
        usersAPI.addPost(userId, text).then(data => {
            dispatch(savePost(data));
        })
    }
}