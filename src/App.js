import './App.css';
import Header from "./components/Header/Header";
import UserContent from "./components/Profile/UserContent/UserContent";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <div className='container'>
            <Header />
            <Navbar />
            <Profile />
        </div>
    );
}

export default App;
