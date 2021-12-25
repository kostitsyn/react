const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={require('./images/logo.jpg')} alt='logo'/>
            </div>
            <div className='search'>
                <input placeholder='Поиск' />
            </div>
            <div>
                <div className='lbl-notifications'>
                    Notification label
                </div>
                <div className='lbl-music'>
                    Music label
                </div>
            </div>
        </div>
    )
}

export default Header;