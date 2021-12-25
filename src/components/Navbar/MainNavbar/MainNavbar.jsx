import c from './MainNavbar.module.css';

const MainNavbar = () => {
    return (
        <nav>
            <ul>
                <li className={c.active}>Моя страница</li>
                <li>Новости</li>
                <li>Сообщения</li>
                <li>Друзья</li>
                <li>Сообщества</li>
                <li>Фотографии</li>
                <li>Музыка</li>
                <li>Видео</li>
            </ul>
        </nav>
    )
}

export default MainNavbar;