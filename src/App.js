import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/MainNavbar/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Navigate, Routes, Redirect} from "react-router-dom";
import React from 'react';
const App = () => {
    return (
        <BrowserRouter>
            <div className='container'>
                <Header/>
                <Navbar/>
                {/*<p>{React.version}</p>*/}
                <div className='content'>
                    <Profile/>
                    <Routes path='/' component={Profile}/>
                    {/*<Redirect from="/profile" to="/"/>*/}
                    {/*<Navigate from='/profile' to='/'/>*/}
                    <Routes path='/messages' component={Messages}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
