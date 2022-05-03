import {usersAPI, profileAPI} from '../api/api';
import {setFriends} from './friends-reducer';

const SAVE_POST = 'profile/SAVE_POST';
const DELETE_POST = 'profile/DELETE_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_PROFILE_ON_PAGE = 'profile/SET_PROFILE_ON_PAGE';
const SET_POSTS = 'profile/SET_POSTS';
const SET_STATUS = 'profile/SET_STATUS';
const SET_AVATAR = 'profile/SET_AVATAR';


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
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)};
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_PROFILE_ON_PAGE:
            return {...state, profileOnPage: action.profile};
        case SET_POSTS:
            return {...state, posts: action.posts};
        case SET_STATUS:
            return {...state, profile: {...state.profile, aboutMe: action.newStatus}};
        case SET_AVATAR:
//            let spam = {...state, profile: {...state.profile, user: {...state.profile.user, imgFile: `127.0.0.1:8000${action.file}`}}}
            let spam = {...state, profile: {...state.profile, user: {...state.profile.user, imgFile: action.file}}}
            return spam
        default:
            return state;
    }
}

export const savePost = (newPost) => ({type: SAVE_POST, newPost});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setProfileOnPage = (profile) => ({type: SET_PROFILE_ON_PAGE, profile});
export const setPosts = (posts) => ({type: SET_POSTS, posts});
export const setStatus = (newStatus) => ({type: SET_STATUS, newStatus});
export const setAvatar = (file) => ({type: SET_AVATAR, file});

export default profileReducer;

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(data));
        dispatch(setFriends(data.friends));
    }
}

export const getProfileOnPage = (profile, userId=null) => {
    return async (dispatch) => {
        if (userId) {
            let data = await profileAPI.getProfile(userId);
            dispatch(setProfileOnPage(data));
        }else {
            dispatch(setProfileOnPage(profile));
        }
    }
}

export const getPosts = (userId) => {
    return async (dispatch) => {
        let data = await usersAPI.getPosts(userId);
        dispatch(setPosts(data));
    }
}

export const addPost = (userId, text) => {
    return async (dispatch) => {
        let data = await usersAPI.addPost(userId, text);
        dispatch(savePost(data));
    }
}

export const saveStatus = (newStatus) => {
    return async (dispatch) => {
        let data = await profileAPI.saveStatus(newStatus);
        if (data.resultCode === 0) {
            dispatch(setStatus(data.data.status));
        }
    }
}

export const saveAvatar = (file) => {
    return async (dispatch) => {
        let data = await profileAPI.changeAvatar(file);
        if (data.resultCode === 0) {
            dispatch(setAvatar(data.data.ava));
        }
    }
}
