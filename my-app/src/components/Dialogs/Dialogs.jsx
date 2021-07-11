import c from './Dialogs.module.css';
import Message from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    /*let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} ava={d.ava} />);*/
    let dialogsElements = props.state.dialogs.map(d => <DialogItem state={d} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} key={m.id} />);
    return (
    <div className={c.dialogs}>
        <div className={c.dialogItems}>
            {dialogsElements}
        </div>
        <div className={c.messages}>
            {messagesElements}
        </div>
    </div>
    )
}


export default Dialogs;