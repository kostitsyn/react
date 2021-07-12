import {NavLink} from "react-router-dom";
import c from './DialogItem.module.css';

const DialogItem = (props) => {
    return (
    <div className={c.dialogItem}>
        <img src={props.state.ava} alt=''></img>
        <NavLink to={`/messages/${props.state.id}`} activeClassName={c.active}>{props.state.name}</NavLink>
    </div>
    )
}

export default DialogItem;