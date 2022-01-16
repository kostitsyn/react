const SET_USERS = 'SET-USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const GET_TOTAL_USERS_COUNT = 'GET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 10,
    pageSize: 3,
    isFetching: false,
}

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.users};
        case CHANGE_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber};
        case GET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.usersCount};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        default:
            return state;
    }
}

export const setUsers = (users) => ({type: SET_USERS, users});
export const changePage = (pageNumber) => ({type: CHANGE_CURRENT_PAGE, pageNumber});
export const getTotalUsersCount = (usersCount) => ({type: GET_TOTAL_USERS_COUNT, usersCount});
export const setToggle = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer;