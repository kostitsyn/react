const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';


let initialState = {
            newMessageText: '',
            messages: [
                {userId: 1},
                {userId: 2},
                {userId: 3},
            ],
            dialogs: [
                {
                    id: 1, messages: [{userId: 1, message: 'hello'}, {userId: 2, message: 'you too'}, {userId: 1, message: 'super'}]
                },
                {
                    id: 2,
                    messages: [{userId: 2, message: 'good morning'}, {userId: 3, message: 'you too'}, {userId: 2, message: 'go home'}]
                },
                {
                    id: 3,
                    messages: [{userId: 4, message: 'you sick'}, {userId: 5, message: 'you too'}, {userId: 4, message: 'fuck you'}]
                },
            ]
        }

const messagesReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                user_id: 100,
                message: state.newMessageText
            }
            return {
                ...state,
                newMessageText: '',
                dialogs: state.dialogs.map(d => {
                    if (d.id == action.dialogId) {
                        return {...d, messages: [...d.messages, newMessage]}
                    }
                    return d;
                })
            }
        }
        case UPDATE_MESSAGE: {
            return {...state, newMessageText: action.text};
        }
        default:
            return state;
    }
}

export const updateMessageText = (text) => ({type: UPDATE_MESSAGE, text});
export const addMessage = (dialogId) => ({type: ADD_MESSAGE, dialogId});

export default messagesReducer;