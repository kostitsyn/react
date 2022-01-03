import React from "react";
import {useParams} from "react-router-dom";
import DialogCompanion from "./DialogCompanion/DialogCompanion";
import DialogMe from "./DialogMe/DialogMe";
import c from './Dialog.module.css';

const Dialog = (props) => {
    let { id } = useParams();
    let currentDialogs = props.state.messagesPage.dialogs.find(elem => elem.id.toString() === id);
    let companion = props.state.users.find(u => u.id.toString() === id);
    let me = props.state.users.find(u => u.id === 100);
    let dialogElements = currentDialogs.messages.map(d => d.user_id == id ? <DialogCompanion companion={companion} state={d} key={`${d.id}${d.message}`} /> : <DialogMe me={me} state={d} /> )

    let newMsgElement = React.createRef();

    let updateMessage = () => {
        let text = newMsgElement.current.value;
        let action = {
            type: "UPDATE-MESSAGE",
            text: text
        }
        props.dispatch(action);
    }

    let addMsg = () => {
        let action = {
            type: "ADD-MESSAGE",
            dialog_id: id
        }
        props.dispatch(action);
    }

    return (
        <div>
            {dialogElements}
            <div className={c.inputBlock}>
                <textarea onChange={updateMessage} value={props.state.messagesPage.newMessageText}
                          ref={newMsgElement} className={c.inputText} />
                <button onClick={addMsg}>Сохранить</button>
            </div>
        </div>
    )
}

export default Dialog;