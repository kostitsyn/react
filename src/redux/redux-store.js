import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import friendsReducer from './friends-reducer';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import messagesReducer from './messages-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import {reducer as formReducer} from 'redux-form';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window._store = store;
export default store;