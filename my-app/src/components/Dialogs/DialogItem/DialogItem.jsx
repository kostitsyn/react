import c from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>
    <div className={c.dialogItem}>
        <NavLink to={`/dialogs/${props.id}`} activeClassName={c.active}>{props.name}</NavLink>
    </div>

export default DialogItem;