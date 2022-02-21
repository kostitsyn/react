import React from "react";
import {useParams} from "react-router-dom";
import MessageCompanion from "./MessageCompanion/MessageCompanion";
import OwnMessage from "./OwnMessage/OwnMessage";
import c from './Messages.module.css';


const Messages = (props) => {
    let currentMessages = props.messages.find(m => m.dialogId === Number(props.router.id));
    let companionId = currentMessages.messages[0].sender.id !== props.userId
                                        ? currentMessages.messages[0].sender.id
                                        : currentMessages.messages[0].recipient.id;
    let dialogElements = currentMessages.messages.map(m => m.sender.id !== props.userId
                              ? <MessageCompanion companion={m.sender} message={m.text} date={m.dateSend} key={`${m.id}${m.message}`} />
                              : <OwnMessage currentUser={m.sender} message={m.text} date={m.dateSend} key={`${m.id}${m.message}`} /> )

    let updateMessage = (event) => {
        let text = event.target.value;
        props.updateMessageText(text);
    }

    let addMsg = () => {
        props.addMessage(currentMessages.dialogId, props.userId, companionId,  props.newMessageText);
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

export default Messages;