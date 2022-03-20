import {usersAPI, profileAPI} from '../api/api';
import {setFriends} from './friends-reducer';

const SAVE_POST = 'SAVE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_ON_PAGE = 'SET_PROFILE_ON_PAGE';
const SET_POSTS = 'SET_POSTS';
const SET_STATUS = 'SET_STATUS';


let initialState = {
            posts: [],
            profile: null,
            profileOnPage: null
        }

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case SAVE_POST: {
            return {...state, posts: [...state.posts, action.newPost]};
        }
        case SET_USER_PROFILE:
            let spam = {...state, profile: action.profile};
            return spam;
        case SET_PROFILE_ON_PAGE:
            return {...state, profileOnPage: action.profile};
        case SET_POSTS:
            return {...state, posts: action.posts};
        case SET_STATUS:
              return {...state, profile: {...state.profile, aboutMe: action.newStatus}};
        default:
            return state;
    }
}

export const savePost = (newPost) => ({type: SAVE_POST, newPost});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setProfileOnPage = (profile) => ({type: SET_PROFILE_ON_PAGE, profile});
export const setPosts = (posts) => ({type: SET_POSTS, posts});
export const setStatus = (newStatus) => ({type: SET_STATUS, newStatus});

export default profileReducer;

export const getUserProfile = (userId) => {

    return (dispatch) => {
            profileAPI.getProfile(userId).then(data => {
                dispatch(setUserProfile(data));
                dispatch(setFriends(data.friends));
            })
    }
}

export const getProfileOnPage = (profile, userId=null) => {
    return (dispatch) => {
        if (userId) {
            profileAPI.getProfile(userId).then(data => {
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
        usersAPI.addPost(userId, text).then(data => {
            dispatch(savePost(data));
        })
    }
}

export const saveStatus = (newStatus) => {
    return (dispatch) => {
        profileAPI.saveStatus(newStatus).then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(data.data.status));
            }
        })
    }
}
