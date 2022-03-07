import {createSelector} from 'reselect';

export const getFriends = state => {
    return state.friendsPage.friends;
}

export const getProfile = state => {
    return state.profilePage.profile;
}

const getUsersSelector = state => {
    return state.users.users;
}

export const getUsers = createSelector(getUsersSelector, users => {
    return users.filter(u => true);
})

export const getCurrentPage = state => {
    return state.users.currentPage;
}

export const getUsersCount = state => {
    return state.users.totalUsersCount;
}

export const getPageSize = state => {
    return state.users.pageSize;
}

export const getIsFetching = state => {
    return state.users.isFetching;
}

export const getFollowingInProgress = state => {
    return state.users.followingInProgress;
}

export const getIsAuth = state => {
    return state.auth.isAuthenticated;
}