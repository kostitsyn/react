import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/MainNavbar/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';
import News from "./components/Navbar/MainNavbar/News/News";
import Friends from "./components/Navbar/MainNavbar/Friends/Friends";
import Communities from "./components/Navbar/MainNavbar/Communities/Communities";
import Photos from "./components/Navbar/MainNavbar/Photos/Photos";
import Music from "./components/Navbar/MainNavbar/Music/Music";
import Video from "./components/Navbar/MainNavbar/Video/Video";
import MiniApps from "./components/Navbar/AdditionalNavbar/MiniApps/MiniApps";
import Bookmarks from "./components/Navbar/AdditionalNavbar/Bookmarks/Bookmarks";
import Files from "./components/Navbar/AdditionalNavbar/Files/Files";
import Advertising from "./components/Navbar/AdditionalNavbar/Advertising/Advertising";
const App = () => {
    return (
        <BrowserRouter>
            <div className='container'>
                <Header/>
                <Navbar/>
                {/*<p>{React.version}</p>*/}
                <div className='content'>
                    <Routes>
                        <Route path='/profile' component={Profile}/>
                        <Route path='/news' component={News}/>
                        <Route path='/messages' component={Messages}/>
                        <Route path='/friends' component={Friends}/>
                        <Route path='/communities' component={Communities}/>
                        <Route path='/photos' component={Photos}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/video' component={Video}/>
                        <Route path='/mini-apps' component={MiniApps}/>
                        <Route path='/bookmarks' component={Bookmarks}/>
                        <Route path='/files' component={Files}/>
                        <Route path='/advertising' component={Advertising}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
