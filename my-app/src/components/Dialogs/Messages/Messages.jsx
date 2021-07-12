import c from './Messages.module.css';


const Message = (props) =>
    <div className={`${c.message} ${(props.state.sender === 1) ? c.messageLeft : c.messageRight}`}>
        <span>{props.state.sender}</span>
        {props.state.message}
    </div>

export default Message;

