import {usersAPI, authAPI} from '../api/api';
import {setAuthUserData} from './auth-reducer';
import {setFriends} from './friends-reducer';

const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_ON_PAGE = 'SET_PROFILE_ON_PAGE';


let initialState = {
            newPostText: '',
            posts: [
                {id: 1, author: 1, message: "Отдыхаю на Кубе", likes: 10, comments: 5},
                {id: 2, author: 1, message: "Окончил обучение на GeekBrains", likes: 123, comments: 2},
                {id: 3, author: 1, message: "Устроился на работу мечты", likes: 100000, comments: 3}
            ],
            profile: null,
            profileOnPage: null
        }

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            debugger;
            let lastId = state.posts[state.posts.length-1].id;
            let newPost = {
                id: ++lastId,
                author: action.authorId,
                message: state.newPostText,
                likes: 0,
                comments: 0
            };
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        }
        case UPDATE_POST: {
            return {...state, newPostText: action.text};
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_PROFILE_ON_PAGE:
            debugger;
            return {...state, profileOnPage: action.profile};
        default:
            return state;
    }
}

export const updatePostText = (text) => ({type: UPDATE_POST, text});
export const addPost = (authorId) => ({type: ADD_POST, authorId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setProfileOnPage = (profile) => ({type: SET_PROFILE_ON_PAGE, profile});

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
    debugger;
    return (dispatch) => {
        if (userId) {
            usersAPI.getProfile(userId).then(data => {
            debugger;
            dispatch(setProfileOnPage(data));
        })
        }else {
            dispatch(setProfileOnPage(profile));
        }
    }
}