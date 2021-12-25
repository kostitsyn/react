const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={require('../../images/logo.jpg')} alt='logo'/>
            </div>
            <div className='search'>
                <input placeholder='Поиск'/>
            </div>
            <div className='labels'>
                <div className='lbl-notifications'>
                    Notification label
                </div>
                <div className='lbl-music'>
                    Music label
                </div>
            </div>
            <div className='control-menu'>
                Control menu
            </div>
        </header>
    )
}

export default Header;