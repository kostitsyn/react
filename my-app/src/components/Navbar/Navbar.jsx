import c from './Navbar.module.css';
import NavItem from "./NavItem/NavItem";
import Friends from "../Friends/Friends";

const Navbar = (props) => {
    let navItemElements = props.state.navbar.map(item => <NavItem navName={item.navName} key={item.id}/>);
    return (
        <div className={c.nav}>
            <nav>
                {navItemElements}
                <Friends friendItems={props.state.friends} />
            </nav>

        </div>
    )
}
export default Navbar;