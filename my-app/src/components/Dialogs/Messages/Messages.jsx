import c from './Messages.module.css'

const Messages = (props) =>
    <div className={c.message}>{props.message}</div>

export default Messages;