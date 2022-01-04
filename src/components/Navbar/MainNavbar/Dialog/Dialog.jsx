import React from "react";
import {useParams} from "react-router-dom";
import DialogCompanion from "./DialogCompanion/DialogCompanion";
import DialogMe from "./DialogMe/DialogMe";
import c from './Dialog.module.css';
import {addMessageActionCreator, updateMessageActionCreator} from "../../../../redux/store";

const Dialog = (props) => {
    let { id } = useParams();
    let currentDialogs = props.state.messagesPage.dialogs.find(elem => elem.id.toString() === id);
    let companion = props.state.users.find(u => u.id.toString() === id);
    let me = props.state.users.find(u => u.id === 100);
    let dialogElements = currentDialogs.messages.map(d => d.user_id == id ? <DialogCompanion companion={companion} state={d} key={`${d.id}${d.message}`} /> : <DialogMe me={me} state={d} /> )

    let updateMessage = (event) => {
        let text = event.target.value;
        props.dispatch(updateMessageActionCreator(text));
    }

    let addMsg = () => {
        props.dispatch(addMessageActionCreator(id));
    }

    return (
        <div>
            {dialogElements}
            <div className={c.inputBlock}>
                <textarea onChange={updateMessage} value={props.state.messagesPage.newMessageText}
                          className={c.inputText} />
                <button onClick={addMsg}>Сохранить</button>
            </div>
        </div>
    )
}

export default Dialog;