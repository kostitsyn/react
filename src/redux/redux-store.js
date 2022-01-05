import {createStore, combineReducers} from 'redux';
import friendsReducer from './friends-reducer';
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import usersReducer from './users-reducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer,
    users: usersReducer
});

let store = createStore(reducers);

export default store;