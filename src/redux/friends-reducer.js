const addFriend = 'ADD-FRIEND';
const deleteFriend = 'DELETE-FRIEND';

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
        case addFriend: {
            state.friends.forEach(f => arrayId.push(f.user_id));
            if (!arrayId.includes(action.user_id)) {
                let stateCopy = {...state};
                stateCopy.friends = [...state.friends];
                stateCopy.friends.push({user_id: action.user_id});
                return stateCopy;
            }
        }
        case deleteFriend: {
            state.friends.forEach(f => arrayId.push(f.user_id));
            if (arrayId.includes(action.user_id)) {
                let stateCopy = {...state};
                stateCopy.friends = [...state.friends];
                stateCopy.friends = stateCopy.friends.filter(f => f.user_id !== action.user_id);
                return stateCopy;
            }
        }
        default:
            return state;
    }
}

export const addFriendActionCreator = (user_id) => ({type: addFriend, user_id});
export const deleteFriendActionCreator = (user_id) => ({type: deleteFriend, user_id});

export default friendsReducer;