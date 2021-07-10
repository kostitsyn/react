import c from './Dialogs.module.css';
import Message from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";

let users = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Vitaliy'},
    {id: 4, name: 'Sergey'}
]

let usersElements = users.map(u => <DialogItem name={u.name} id={u.id} />);


let messages = [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'Lorem ipsum dolores!'},
    {id: 3, message: 'Funk soul brother!'}
]

let messagesElements = messages.map(m => <Message message={m.message} />);


const Dialogs = () =>
    <div className={c.dialogs}>
        <div className={c.dialogItems}>
            {usersElements}
        </div>
        <div className={c.messages}>
            {messagesElements}
        </div>
    </div>

export default Dialogs;