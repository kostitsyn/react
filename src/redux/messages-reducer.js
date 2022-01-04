const addMessage = 'ADD-MESSAGE';
const updateMessage = 'UPDATE-MESSAGE';

const messagesReducer = (state, action) => {
    switch (action.type) {
        case addMessage:
            let currentDialogs = state.dialogs.find(d => d.id == action.dialog_id);
            let newMessage = {
                user_id: 100,
                message: state.newMessageText
            }
            currentDialogs.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case updateMessage:
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    }
}

export const updateMessageActionCreator = (text) => ({type: updateMessage, text});
export const addMessageActionCreator = (dialog_id) => ({type: addMessage, dialog_id});

export default messagesReducer;