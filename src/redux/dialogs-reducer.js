import {dialogsAPI} from '../api/api';
import {setMessages} from './messages-reducer';

const SET_DIALOGS = 'dialogs/SET_DIALOGS';


let initialState = {
            dialogs: []
        }

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_DIALOGS: {
            return {...state, dialogs: action.dialogs}
        }
        default:
            return state;
    }
}

export const setDialogs = (dialogs) => ({type: SET_DIALOGS, dialogs});

export const getDialogs = (userId) => {
    return async (dispatch) => {
        let data = await dialogsAPI.getDialogs(userId)
        dispatch(setDialogs(data));
        for (let i=0; i<data.length; i++) {
            dispatch(setMessages({dialogId: data[i].id, messages: data[i].messages}));
        }
    }
}

export default dialogsReducer;