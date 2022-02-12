const SET_FRIENDS = 'SET_FRIENDS';
const ADD_FRIEND = 'ADD-FRIEND';
const DELETE_FRIEND = 'DELETE-FRIEND';

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
                let friends = state.friends.filter(f => f !== action.userId);
                return {...state, friends: friends};
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
export const addFriend = (userId) => ({type: ADD_FRIEND, userId});
export const deleteFriend = (userId) => ({type: DELETE_FRIEND, userId});

export default friendsReducer;