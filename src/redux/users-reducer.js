const SET_USERS = 'SET-USERS';

let initialState = []

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return [ ...action.users];
        default:
            return state;
    }

}

export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;