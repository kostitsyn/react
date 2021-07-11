import {NavLink} from "react-router-dom";
import c from './DialogItem.module.css';

const DialogItem = (props) => {
    debugger;
    return (
    <div className={c.dialogItem}>
        <img src={props.ava} alt=''></img>
        <NavLink to={`/messages/${props.id}`} activeClassName={c.active}>{props.name}</NavLink>
    </div>
    )
}

export default DialogItem;