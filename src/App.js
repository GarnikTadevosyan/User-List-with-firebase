import * as React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar'
import HomePage from './components/Pages/Home/Homepage';
import UserPage from './components/Pages/Users-list/UserPage'
import UserPosts from './components/Pages/User-Posts/UserPosts';
import UserAlbums from './components/Pages/User-Albums/UserAlbums';
import ErrorPage from './components/Pages/Error-Page/ErrorPage';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import './App.css';


function App () {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <Navbar/>
        <Routes>
          <Route path="" element={<HomePage/>} />
          <Route path="/users-list" element={<UserPage />} />
          <Route path='/posts/:id' element={<UserPosts />} />
          <Route path='/albums/:id' element={<UserAlbums/>} />
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}


export default App;