import {usersAPI} from '../api/api';

const SET_USERS = 'SET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const GET_TOTAL_USERS_COUNT = 'GET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 10,
    pageSize: 7,
    isFetching: false,
    followingInProgress: [],
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
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const setUsers = (users) => ({type: SET_USERS, users});
export const changePage = (pageNumber) => ({type: CHANGE_CURRENT_PAGE, pageNumber});
export const getTotalUsersCount = (usersCount) => ({type: GET_TOTAL_USERS_COUNT, usersCount});
export const setToggle = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId});

export default usersReducer;


export const requestUsers = (pageSize, currentPage) => {
    return (dispatch) => {
            dispatch(changePage(currentPage));
            dispatch(setToggle(true));
            usersAPI.getUsers(pageSize, currentPage).then(data => {
                dispatch(setToggle(false));
                dispatch(setUsers(data.results));
                dispatch(getTotalUsersCount(data.count));
            })
    }
}
