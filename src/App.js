import * as React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar'
import CreateUser from './components/Pages/User-Create-Center/CreateUser';
import UserLogin from "./components/Pages/User-Login/UserLogin";
import UserPage from './components/Pages/Users-list/UserPage'
import UserPosts from './components/Pages/User-Posts/UserPosts';
import UserAlbums from './components/Pages/User-Albums/UserAlbums';
import ErrorPage from './components/Pages/Error-Page/ErrorPage';
import './App.css';
import {connect} from "react-redux";
import {getAuth, onAuthStateChanged} from "@firebase/auth";
import {userActions} from "./redux/actions";

function App ({changeAuthUserData}) {
        const auth = getAuth();
        const currentUser = auth.currentUser;
        onAuthStateChanged(auth, (user) => {
            const {accessToken,email,uid} = user;
            if (!!user) {
                changeAuthUserData({accessToken,email,uid});
            } else {
                changeAuthUserData(null);
            }
        });

    return (
    <BrowserRouter>
        <div>
          <Navbar/>
        <Routes>
          <Route path="" element={<CreateUser/>} />
          <Route path="/login" element={<UserLogin/>} />
          <Route path="/users-list" element={<UserPage />} />
          <Route path='/posts/:id' element={<UserPosts />} />
          <Route path='/albums/:id' element={<UserAlbums/>} />
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        </div>
    </BrowserRouter>
  );
}


const mapDispatchToProps = dispatch => ({
      changeAuthUserData:(user) => dispatch(userActions.changeAuthUserData( user))
});


export default connect(null, mapDispatchToProps)(App);