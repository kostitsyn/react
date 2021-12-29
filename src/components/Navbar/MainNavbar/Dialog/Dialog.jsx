import React from "react";
import {useParams} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";

const Dialog = (props) => {
    let dialogs = [
        {id: 1, messages: [{id: 100, message: 'hello'}, {id: 1, message: 'you too'}, {id: 100, message: 'super'}]},
        {id: 2, messages: [{id: 2, message: 'good morning'}, {id: 100, message: 'you too'}, {id: 2, message: 'go home'}]},
        {id: 3, messages: [{id: 100, message: 'you sick'}, {id: 3, message: 'you too'}, {id: 100, message: 'fuck you'}]},
    ]
    let { id } = useParams();
    let currentDialogs = dialogs.find(elem => elem.id == id);
    let dialogElements = currentDialogs.messages.map(elem => <DialogItem id={elem.id} message={elem.message} key={elem.id} />)
    return (
        <div>
            {dialogElements}
        </div>
    )
}

export default Dialog;