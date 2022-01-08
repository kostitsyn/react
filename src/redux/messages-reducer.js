const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';


let initialState = {
            newMessageText: '',
            messages: [
                {user_id: 1},
                {user_id: 2},
                {user_id: 3},
            ],
            dialogs: [
                {
                    id: 1, messages: [{user_id: 100, message: 'hello'}, {user_id: 1, message: 'you too'}, {user_id: 100, message: 'super'}]
                },
                {
                    id: 2,
                    messages: [{user_id: 2, message: 'good morning'}, {user_id: 100, message: 'you too'}, {user_id: 2, message: 'go home'}]
                },
                {
                    id: 3,
                    messages: [{user_id: 100, message: 'you sick'}, {user_id: 3, message: 'you too'}, {user_id: 100, message: 'fuck you'}]
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
                    if (d.id == action.dialog_id) {
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

export const updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE, text});
export const addMessageActionCreator = (dialog_id) => ({type: ADD_MESSAGE, dialog_id});

export default messagesReducer;