import React from "react";
import {useParams, Route} from "react-router-dom";
import DialogCompanion from "./DialogCompanion/DialogCompanion";
import DialogMe from "./OwnDialog/OwnDialog";
import c from './Dialog.module.css';
import Login from '../../../../../Login/Login';

const Dialog = (props) => {
    let dialogElements = props.currentDialogs.messages.map(d => d.user_id == props.id
                              ? <DialogCompanion companion={props.companion} state={d} key={`${d.id}${d.message}`} />
                              : <DialogMe currentUser={props.currentUser} state={d} /> )

    let updateMessage = (event) => {
        let text = event.target.value;
        props.updateMessageText(text);
    }

    let addMsg = () => {
        props.addMessage();
    }
    if (!props.isAuth) return <Route path='/login' element={<Login/>}/>;
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