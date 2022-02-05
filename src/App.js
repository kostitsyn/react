import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";

import ProfileContainer from "./components/Navbar/MainNavbar/Profile/ProfileContainer";
import UsersContainer from "./components/Navbar/MainNavbar/Users/UsersContainer";

import Messages from "./components/Navbar/MainNavbar/Messages/Messages";
import {Routes, Route} from "react-router-dom";
import React from 'react';
import News from "./components/Navbar/MainNavbar/News/News";
import FriendsContainer from "./components/Navbar/MainNavbar/Friends/FriendsContainer";
import Communities from "./components/Navbar/MainNavbar/Communities/Communities";
import Photos from "./components/Navbar/MainNavbar/Photos/Photos";
import Music from "./components/Navbar/MainNavbar/Music/Music";
import Video from "./components/Navbar/MainNavbar/Video/Video";
import MiniApps from "./components/Navbar/AdditionalNavbar/MiniApps/MiniApps";
import Bookmarks from "./components/Navbar/AdditionalNavbar/Bookmarks/Bookmarks";
import Files from "./components/Navbar/AdditionalNavbar/Files/Files";
import Advertising from "./components/Navbar/AdditionalNavbar/Advertising/Advertising";
import DialogContainer from "./components/Navbar/MainNavbar/Messages/Companion/Dialog/DialogContainer";


const App = (props) => {
    return (
        <div className='container'>
            <HeaderContainer/>
            <Navbar/>
            <div className='content'>
                <Routes>
                    <Route path='/profile'>
                        <Route path="" element={<ProfileContainer/>}/>
                        <Route path=":userId" element={<ProfileContainer/>}/>
                    </Route>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/messages'
                           element={<Messages store={props.store}/>}/>
                    <Route path='/friends' element={<FriendsContainer/>}/>
                    <Route path='/communities' element={<Communities/>}/>
                    <Route path='/photos' element={<Photos/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/video' element={<Video/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                    <Route path='/mini-apps' element={<MiniApps/>}/>
                    <Route path='/bookmarks' element={<Bookmarks/>}/>
                    <Route path='/files' element={<Files/>}/>
                    <Route path='/advertising' element={<Advertising/>}/>
                    <Route path='/messages/:id' element={<DialogContainer />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
