import React from 'react';
import c from './Dialogs.module.css';
import Message from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let dialogsElements = props.state.getState().dialogsPage.dialogs.map(d => <DialogItem state={d} key={d.id} />);
    let messagesElements = props.state.getState().dialogsPage.messages.map(m => <Message state={m} key={`${m.sender}${m.recipient}${m.id}`}/>);
    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.state.addMessage();
    }

    let onMessageChange = () => {
        props.state.updateMessageText(newMessageElement.current.value);
    }

    return (
    <div className={c.dialogs}>
        <div className={c.dialogItems}>
            {dialogsElements}
        </div>
        <div className={c.messages}>
            {messagesElements}
        </div>
        <div className={c.addMessage}>
            <div>
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.state.getState().dialogsPage.newMessageText} />
            </div>
            <div>
                <button onClick={addMessage}>Добавить</button>
            </div>
        </div>
    </div>
    )
}


export default Dialogs;