import React from "react";
import {useParams} from "react-router-dom";
import c from './Dialog.module.css';
import {addMessageActionCreator, updateMessageActionCreator} from "../../../../redux/messages-reducer";
import Dialog from './Dialog';

const DialogContainer = (props) => {
    let state = props.store.getState();
    let { id } = useParams();
    let currentDialogs = state.messagesPage.dialogs.find(elem => elem.id.toString() === id);
    let companion = state.users.find(u => u.id.toString() === id);
    let currentUser = state.users.find(u => u.id === 100);

    let onUpdateMessage = (text) => {
        props.store.dispatch(updateMessageActionCreator(text));
    }

    let onAddMsg = () => {
        props.store.dispatch(addMessageActionCreator(id));
    }

    return (
        <Dialog newMessageText={state.messagesPage.newMessageText}
                updateMessage={onUpdateMessage}
                addMsg={onAddMsg} id={id}
                currentDialogs={currentDialogs}
                companion={companion}
                currentUser={currentUser}
                />
    )
}

export default DialogContainer;