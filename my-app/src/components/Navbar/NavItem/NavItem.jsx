import c from './NavItem.module.css';
import {NavLink} from "react-router-dom";



const NavItem = (props) =>
    <div className={c.item}>
            <NavLink to={`/${props.navName.toLowerCase()}`} activeClassName={c.active}>{props.navName}</NavLink>
    </div>

export default NavItem;