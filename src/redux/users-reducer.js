const SET_USERS = 'SET-USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const GET_TOTAL_USERS_COUNT = 'GET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 10,
    pageSize: 3
}

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.users};
        case CHANGE_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber};
        case GET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.usersCount};
        default:
            return state;
    }

}

export const setUsersAC = (users) => ({type: SET_USERS, users});
export const changePageAC = (pageNumber) => ({type: CHANGE_CURRENT_PAGE, pageNumber});
export const getCountUsersAC = (usersCount) => ({type: GET_TOTAL_USERS_COUNT, usersCount});

export default usersReducer;