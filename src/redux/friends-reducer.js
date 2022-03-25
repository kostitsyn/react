import {usersAPI} from '../api/api';
import {toggleFollowingInProgress} from './users-reducer';

const SET_FRIENDS = 'friends/SET_FRIENDS';
const ADD_FRIEND = 'friends/ADD-FRIEND';
const DELETE_FRIEND = 'friends/DELETE-FRIEND';

let initialState = {
            friends: []
        }

const friendsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND: {
            if (!state.friends.includes(action.userId)) {
                return {...state, friends: [...state.friends, action.userId]};
            }
        }
        case DELETE_FRIEND: {
            if (state.friends.includes(action.userId)) {
                return {...state, friends: state.friends.filter(f => f !== action.userId)};
            }
        }
        case SET_FRIENDS: {
            return {...state, friends: action.friends}
        }
        default:
            return state;
    }
}

export const setFriends = (friends) => ({type: SET_FRIENDS, friends})
export const addFriendSuccess = (userId) => ({type: ADD_FRIEND, userId});
export const deleteFriendSuccess = (userId) => ({type: DELETE_FRIEND, userId});

export default friendsReducer;


const addDeleteFriend = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgress(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(data.data.id));
    }
    dispatch(toggleFollowingInProgress(false, userId));
}

export const addFriend = (userId) => {
    return (dispatch) => {
        let apiMethod = usersAPI.addFriend.bind(usersAPI);
        let actionCreator = addFriendSuccess;
        addDeleteFriend(dispatch, userId, apiMethod, actionCreator);
    }
}

export const deleteFriend = (userId) => {
    return (dispatch) => {
        let apiMethod = usersAPI.deleteFriend.bind(usersAPI);
        let actionCreator = deleteFriendSuccess;
        addDeleteFriend(dispatch, userId, apiMethod, actionCreator);
    }
}