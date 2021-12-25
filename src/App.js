import './App.css';
import Header from "./Header";
import UserContent from "./UserContent";
import Navbar from "./Navbar";
import Content from "./Content";
import Favicon from "react-favicon";

const App = () => {
    return (
        <div className='container'>
            {/*<Header />*/}
            {/*<Navbar className='navbar' />*/}
            {/*<UserContent className='user-content' />*/}
            {/*<Content className='content' />*/}
            <div className='header'>
                <div className='logo'>
                    <img src={require('./images/logo.jpg')} alt='logo'/>
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
            </div>
            <div className='navbar'>
                <div>
                    <ul>
                        <li>Моя страница</li>
                        <li>Новости</li>
                        <li>Сообщения</li>
                        <li>Друзья</li>
                        <li>Сообщества</li>
                        <li>Фотографии</li>
                        <li>Музыка</li>
                        <li>Видео</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Мини-приложения</li>
                        <li>Закладки</li>
                        <li>Файлы</li>
                        <li>Реклама</li>
                    </ul>
                </div>
            </div>
            <div className='user-content'>
                <div>
                    Image
                </div>
                <div>
                    Presents
                </div>
                <div>
                    Friends
                </div>
                <div>
                    Friends online
                </div>
                <div>
                    Subscriptions
                </div>
                <div>
                    Video
                </div>
                <div>
                    Audio
                </div>
            </div>
            <div className='content'>
                <div>Content header</div>
                <div>User information</div>
                <div>User data</div>
                <div>User photos</div>
                <div>Add post</div>
                <div>
                    Posts
                    <div>Post1</div>
                    <div>Post2</div>
                    <div>Post3</div>
                </div>
            </div>
        </div>
    );
}

export default App;
