const addMessage = 'ADD-MESSAGE';
const updateMessage = 'UPDATE-MESSAGE';


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
        case addMessage: {
            let stateCopy = {...state};
            stateCopy.dialogs = [...state.dialogs];
            let currentDialogs = stateCopy.dialogs.find(d => d.id == action.dialog_id);
            let newMessage = {
                user_id: 100,
                message: state.newMessageText
            }
            currentDialogs.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case updateMessage: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.text;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const updateMessageActionCreator = (text) => ({type: updateMessage, text});
export const addMessageActionCreator = (dialog_id) => ({type: addMessage, dialog_id});

export default messagesReducer;