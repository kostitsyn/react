import c from './Header.module.css';

const Header = () => {
    return (
        <header className={c.header}>
            <div className={c.logo}>
                <img src={require('../../images/logo.jpg')} alt='logo'/>
            </div>
            <div className={c.search}>
                <input placeholder='Поиск'/>
            </div>
            <div className={c.labels}>
                <div className={c.lblNotifications}>
                    Notification label
                </div>
                <div className={c.lblMusic}>
                    Music label
                </div>
            </div>
            <div className={c.controlMenu}>
                Control menu
            </div>
        </header>
    )
}

export default Header;