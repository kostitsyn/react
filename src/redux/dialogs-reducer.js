import {messagesAPI} from '../api/api';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
const SET_MESSAGES = 'SET_MESSAGES';


let initialState = {
            newMessageText: '',
            messages: []
        }

const messagesReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                sender: action.senderId,
                recipient: action.recipientId,
                message: state.newMessageText
            }
            return {...state, newMessageText: '', messages: [...state.messsages, newMessage]}
        }
        case UPDATE_MESSAGE: {
            return {...state, newMessageText: action.text};
        }
        case SET_MESSAGES: {
            return {...state, messages: action.messages}
        }
        default:
            return state;
    }
}

export const updateMessageText = (text) => ({type: UPDATE_MESSAGE, text});
export const addMessage = (senderId, recipientId) => ({type: ADD_MESSAGE, senderId, recipientId});
export const setMessages = (messages) => ({type: SET_MESSAGES, messages});

export const getMessages = (userId) => {
    return (dispatch) => {
        messagesAPI.getMessages(userId).then(data => {
            debugger;
            dispatch(setMessages(data));
        })
    }
}

export default messagesReducer;