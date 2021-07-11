import c from './Dialogs.module.css';
import Message from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";


let dialogs = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Aleksey'},
    {id: 4, name: 'Vitaliy'},
    {id: 5, name: 'Sergey'}
]
let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

let messages = [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'What\'s up nigga!'},
    {id: 3, message: 'I\'m fine!'},
]
let messagesElements = messages.map(m => <Message message={m.message} />);

const Dialogs = () =>
    <div className={c.dialogs}>
        <div className={c.dialogItems}>
            {dialogsElements}
        </div>
        <div className={c.messages}>
            {messagesElements}
        </div>
    </div>

export default Dialogs;