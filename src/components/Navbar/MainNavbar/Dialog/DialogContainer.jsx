import React from "react";
import {useParams} from "react-router-dom";
import c from './Dialog.module.css';
import {addMessageActionCreator, updateMessageActionCreator} from "../../../../redux/messages-reducer";
import Dialog from './Dialog';
import StoreContext from '../../../../StoreContext';

const DialogContainer = (props) => {
    let { id } = useParams();
    return <StoreContext.Consumer>
        {store => {
            let state = store.getState();

            let currentDialogs = state.messagesPage.dialogs.find(elem => elem.id.toString() === id);
            let companion = state.users.find(u => u.id.toString() === id);
            let currentUser = state.users.find(u => u.id === 100);

            let onUpdateMessage = (text) => {
                store.dispatch(updateMessageActionCreator(text));
            }

            let onAddMsg = () => {
                store.dispatch(addMessageActionCreator(id));
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
        }
    </StoreContext.Consumer>
}

export default DialogContainer;