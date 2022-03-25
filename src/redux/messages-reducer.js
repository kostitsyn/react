import {messagesAPI} from '../api/api';

const SAVE_MESSAGE = 'messages/SAVE_MESSAGE';

const SET_MESSAGES = 'messages/SET_MESSAGES';


let initialState = {
            messages: []
        }

const messagesReducer = (state=initialState, action) => {
    switch (action.type) {
        case SAVE_MESSAGE: {
            return {
                ...state,
                messages: state.messages.map(m => {
                    debugger;
                    if(m.dialogId === action.newMessage.dialog) {
                        return {...m, messages: [...m.messages, action.newMessage]}
                    }
                    return m;
                })
            }
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

export const saveMessage = (newMessage) => ({type: SAVE_MESSAGE, newMessage});
export const setMessages = (messages) => ({type: SET_MESSAGES, messages});

export const addMessage = (dialogId, sender, recipient, text) => {
    return async (dispatch) => {
    let data = await messagesAPI.addMessage(dialogId, sender, recipient, text);
    dispatch(saveMessage(data));
    }
}

export default messagesReducer;