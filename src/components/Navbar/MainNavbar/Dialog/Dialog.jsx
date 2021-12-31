import React from "react";
import {useParams} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";

const Dialog = (props) => {
    let { id } = useParams();
    let currentDialogs = props.state.messagesPage.dialogs.find(elem => elem.id.toString() === id);
    let companion = props.state.users.find(u => u.id.toString() === id);
    // let companion = props.state.friends.find(elem => elem.id.toString() === id);
    let dialogElements = currentDialogs.messages.map(d => <DialogItem companion={companion} state={d} key={`${d.id}${d.message}`} />)
    return (
        <div>
            {dialogElements}
        </div>
    )
}

export default Dialog;