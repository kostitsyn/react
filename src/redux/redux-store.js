import {createStore, combineReducers} from 'redux';
import friendsReducer from './friends-reducer';
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer,
    users: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.state = store.getState();

export default store;