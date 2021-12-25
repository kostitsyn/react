import MainNavbar from './MainNavbar/MainNavbar';
import AdditionalNavbar from './AdditionalNavbar/AdditionalNavbar';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <MainNavbar/>
            <AdditionalNavbar/>
        </nav>
    );
}

export default Navbar;