import './App.css';
import Header from "./components/Header/Header";
import UserContent from "./components/Profile/UserContent/UserContent";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";

const App = () => {
    return (
        <div className='container'>
            <Header />
            <Navbar />
            <div className='content'>
                {/*<Messages />*/}
                <Profile />
            </div>

        </div>
    );
}

export default App;
