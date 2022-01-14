const SET_USERS = 'SET-USERS';

let initialState = []

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            debugger;
            return [...state, users: action.users];
        default:
            return state;
    }

}

export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;