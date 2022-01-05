import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/MainNavbar/Profile/Profile";
import Messages from "./components/Navbar/MainNavbar/Messages/Messages";
import {Routes, Route} from "react-router-dom";
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
import DialogContainer from "./components/Navbar/MainNavbar/Dialog/DialogContainer";
import Users from "./components/Navbar/MainNavbar/Users/Users";

const App = (props) => {
    return (
        <div className='container'>
            <Header/>
            <Navbar/>
            <div className='content'>
                <Routes>
                    <Route path='/profile' element={<Profile store={props.store}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/messages'
                           element={<Messages/>}/>
                    <Route path='/friends'
                           element={<Friends/>}/>
                    <Route path='/communities' element={<Communities/>}/>
                    <Route path='/photos' element={<Photos/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/video' element={<Video/>}/>
                    <Route path='/users' element={<Users/>}/>
                    <Route path='/mini-apps' element={<MiniApps/>}/>
                    <Route path='/bookmarks' element={<Bookmarks/>}/>
                    <Route path='/files' element={<Files/>}/>
                    <Route path='/advertising' element={<Advertising/>}/>
                    <Route path='/messages/:id' element={<DialogContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
