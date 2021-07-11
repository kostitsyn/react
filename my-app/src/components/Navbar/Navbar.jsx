import c from './Navbar.module.css';
import NavItem from "./NavItem/NavItem";

let navItems = [
        {id: 1, navName: 'Profile'},
        {id: 2, navName: 'Messages'},
        {id: 3, navName: 'News'},
        {id: 4, navName: 'Music'},
        {id: 5, navName: 'Settings'}
]

let navItemElements = navItems.map(item => <NavItem navName={item.navName}/>);

const Navbar = () =>
    <nav className={c.nav}>
        {navItemElements}
    </nav>

export default Navbar;