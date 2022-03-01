import React from "react";
import MessageCompanion from "./MessageCompanion/MessageCompanion";
import OwnMessage from "./OwnMessage/OwnMessage";
import c from './Messages.module.css';
import {Field, reduxForm} from 'redux-form';


const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='text' placeholder='Введите сообщение' className={c.inputText} component='textarea' />
            <button>Сохранить</button>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'addMsg'})(AddMessageForm);

const Messages = (props) => {
    let currentMessages = props.messages.find(m => m.dialogId === Number(props.router.id));
    let companionId = currentMessages.messages[0].sender.id !== props.userId
                                        ? currentMessages.messages[0].sender.id
                                        : currentMessages.messages[0].recipient.id;
    let messageElements = currentMessages.messages.map(m => m.sender.id !== props.userId
                              ? <MessageCompanion companion={m.sender} message={m.text} date={m.dateSend} key={`${m.id}${m.message}`} />
                              : <OwnMessage currentUser={m.sender} message={m.text} date={m.dateSend} key={`${m.id}${m.message}`} /> )



    let addMsg = (formData) => {
        props.addMessage(currentMessages.dialogId, props.userId, companionId,  formData.text);
    }

    return (
        <div>
            {messageElements}
            <div className={c.inputBlock}>
                <AddMessageReduxForm onSubmit={addMsg} />
            </div>
        </div>
    )
}

export default Messages;