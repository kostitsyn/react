import c from './Messages.module.css';


const Message = (props) =>
    <div className={c.message}>{props.message}</div>

export default Message;

