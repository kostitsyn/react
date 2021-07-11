import c from './Navbar.module.css';
import NavItem from "./NavItem/NavItem";

const Navbar = (props) => {
    let navItemElements = props.navItems.map(item => <NavItem navName={item.navName} key={item.id}/>);
    return (
        <nav className={c.nav}>
            {navItemElements}
        </nav>
    )
}
export default Navbar;