import React from "react";
import {useParams} from "react-router-dom";
import DialogCompanion from "./DialogCompanion/DialogCompanion";
import DialogMe from "./OwnDialog/OwnDialog";
import c from './Dialog.module.css';

const Dialog = (props) => {
    debugger;
    let dialogElements = props.currentDialogs.messages.map(d => d.user_id == props.id
                              ? <DialogCompanion companion={props.companion} state={d} key={`${d.id}${d.message}`} />
                              : <DialogMe currentUser={props.currentUser} state={d} /> )

    let updateMessage = (event) => {
        let text = event.target.value;
        props.updateMessage(text);
    }

    let addMsg = () => {
        props.addMsg();
    }

    return (
        <div>
            {dialogElements}
            <div className={c.inputBlock}>
                <textarea onChange={updateMessage} value={props.newMessageText}
                          className={c.inputText} />
                <button onClick={addMsg}>Сохранить</button>
            </div>
        </div>
    )
}

export default Dialog;