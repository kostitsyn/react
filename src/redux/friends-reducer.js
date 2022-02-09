const ADD_FRIEND = 'ADD-FRIEND';
const DELETE_FRIEND = 'DELETE-FRIEND';

let initialState = {
            friends: [
                {user_id: 1},
                {user_id: 4},
                {user_id: 5},
                {user_id: 6},
                {user_id: 7},
                {user_id: 8},
            ]
        }

const friendsReducer = (state=initialState, action) => {
    let arrayId = [];
    switch (action.type) {
        case ADD_FRIEND: {
            debugger;
            state.friends.forEach(f => arrayId.push(f.userId));
            if (!arrayId.includes(action.userId)) {
                return {...state, friends: [...state.friends, {userId: action.userId}]};
            }
        }
        case DELETE_FRIEND: {
            state.friends.forEach(f => arrayId.push(f.userId));
            if (arrayId.includes(action.userId)) {
                let friends = state.friends.filter(f => f.userId !== action.userId);
                return {...state, friends: friends};
            }
        }
        default:
            return state;
    }
}

export const addFriend = (userId) => ({type: ADD_FRIEND, userId});
export const deleteFriend = (userId) => ({type: DELETE_FRIEND, userId});

export default friendsReducer;