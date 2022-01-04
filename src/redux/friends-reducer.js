const addFriend = 'ADD-FRIEND';
const deleteFriend = 'DELETE-FRIEND';

const friendsReducer = (state, action) => {
    let arrayId = [];
    switch (action.type) {
        case addFriend:
            state.friends.forEach(f => arrayId.push(f.user_id));
            if (!arrayId.includes(action.user_id)) {
                state.friends.push({user_id: action.user_id});
            }
            return state;
        case deleteFriend:
            state.friends.forEach(f => arrayId.push(f.user_id));
            if (arrayId.includes(action.user_id)) {
                state.friends = state.friends.filter(f => f.user_id !== action.user_id);
            }
            return state;
        default:
            return state;
    }
}

export const addFriendActionCreator = (user_id) => ({type: addFriend, user_id});
export const deleteFriendActionCreator = (user_id) => ({type: deleteFriend, user_id});

export default friendsReducer;