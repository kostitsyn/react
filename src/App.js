import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";

import ProfileContainer from "./components/Navbar/MainNavbar/Profile/ProfileContainer";
//import UsersContainer from "./components/Navbar/MainNavbar/Users/UsersContainer";

//import MessagesContainer from "./components/Navbar/MainNavbar/Messages/MessagesContainer";
//import DialogsContainer from "./components/Navbar/MainNavbar/Dialogs/DialogsContainer";

import {Routes, Route} from "react-router-dom";
import React, {Suspense, lazy} from 'react';
import News from "./components/Navbar/MainNavbar/News/News";
//import FriendsContainer from "./components/Navbar/MainNavbar/Friends/FriendsContainer";
import Communities from "./components/Navbar/MainNavbar/Communities/Communities";
import Photos from "./components/Navbar/MainNavbar/Photos/Photos";
import Music from "./components/Navbar/MainNavbar/Music/Music";
import Video from "./components/Navbar/MainNavbar/Video/Video";
import MiniApps from "./components/Navbar/AdditionalNavbar/MiniApps/MiniApps";
import Bookmarks from "./components/Navbar/AdditionalNavbar/Bookmarks/Bookmarks";
import Files from "./components/Navbar/AdditionalNavbar/Files/Files";
import Advertising from "./components/Navbar/AdditionalNavbar/Advertising/Advertising";
import Login from "./components/Login/Login";
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from './hoc/withRouter';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './redux/redux-store';

const FriendsContainer = lazy(() => import("./components/Navbar/MainNavbar/Friends/FriendsContainer"));
const UsersContainer = lazy(() => import("./components/Navbar/MainNavbar/Users/UsersContainer"));
const MessagesContainer = lazy(() => import("./components/Navbar/MainNavbar/Messages/MessagesContainer"));
const DialogsContainer = lazy(() => import("./components/Navbar/MainNavbar/Dialogs/DialogsContainer"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render () {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className='container'>
                <HeaderContainer/>
                <Navbar/>
                <div className='content'>
                    <Suspense fallback={<Preloader />}>
                        <Routes>
                            <Route path='/profile'>
                                <Route path="" element={<ProfileContainer/>}/>
                                <Route path=":userId" element={<ProfileContainer/>}/>
                            </Route>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/dialogs'
                                   element={<DialogsContainer/>}/>
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
                            <Route path='/messages/:id' element={<MessagesContainer />}/>
                            <Route path='/login' element={<Login />}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        );
    }
}
let mapStateToProps = (state) => ({
    initialized: state.app.initialized
});


let AppContainer = compose(connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return <React.StrictMode>
               <BrowserRouter>
                    <Provider store={store}>
                        <AppContainer store={store} />
                    </Provider>
               </BrowserRouter>
           </React.StrictMode>
}

export default SamuraiJSApp;
