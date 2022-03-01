import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import friendsReducer from './friends-reducer';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import messagesReducer from './messages-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import {reducer as formReducer} from 'redux-form';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.state = store.getState();

export default store;