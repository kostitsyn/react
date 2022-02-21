import {messagesAPI} from '../api/api';

const SAVE_MESSAGE = 'SAVE_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
const SET_MESSAGES = 'SET_MESSAGES';


let initialState = {
            newMessageText: '',
            messages: []
        }

const messagesReducer = (state=initialState, action) => {
    switch (action.type) {
        case SAVE_MESSAGE: {
            return {
                ...state,
                newMessageText: '',
                messages: state.messages.map(m => {
                    debugger;
                    if(m.dialogId === action.newMessage.dialog) {
                        return {...m, messages: [...m.messages, action.newMessage]}
                    }
                    return m;
                })
            }
        }
        case UPDATE_MESSAGE: {
            return {...state, newMessageText: action.text};
        }
        case SET_MESSAGES: {
            let currentMessages = state.messages.find(m => m.dialogId === action.messages.dialogId);
            if (!currentMessages) {
                return {...state, messages: [...state.messages, action.messages]}
            }
        }
        default:
            return state;
    }
}

export const updateMessageText = (text) => ({type: UPDATE_MESSAGE, text});
export const saveMessage = (newMessage) => ({type: SAVE_MESSAGE, newMessage});
export const setMessages = (messages) => ({type: SET_MESSAGES, messages});

export const addMessage = (dialogId, sender, recipient, text) => {
    return (dispatch) => {
        messagesAPI.addMessage(dialogId, sender, recipient, text).then(data => {
            dispatch(saveMessage(data));
        })
    }
}

export default messagesReducer;