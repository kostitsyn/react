import c from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";


let dialogsData = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Aleksey'},
    {id: 4, name: 'Vitaliy'},
    {id: 5, name: 'Sergey'}
]

let messagesData = [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'What\'s up nigga!'},
    {id: 3, message: 'I\'m fine!'},
]

const Dialogs = (props) =>

    <div className={c.dialogs}>
        <div className={c.dialogItems}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
            <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        </div>
        <div className={c.messages}>
            <Messages message={messagesData[0].message} />
            <Messages message={messagesData[1].message} />
            <Messages message={messagesData[2].message} />
        </div>
    </div>

export default Dialogs;