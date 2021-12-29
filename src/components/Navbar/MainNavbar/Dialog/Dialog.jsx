import React from "react";
import {useParams} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";

const Dialog = (props) => {
    let { id } = useParams();
    let currentDialogs = props.dialogs.find(elem => elem.id == id);
    let dialogElements = currentDialogs.messages.map(d => <DialogItem id={d.id} message={d.message} key={d.id} />)
    return (
        <div>
            {dialogElements}
        </div>
    )
}

export default Dialog;