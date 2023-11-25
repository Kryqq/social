import './App.scss';
import React from 'react';
import Header from './components/Header/Header.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import { Routes, Route } from 'react-router-dom';
import Friends from './components/Navbar/Pages/Friends/Friends.tsx';
import News from './components/Navbar/Pages/News/News.tsx';
import MyProfile from './components/Navbar/Pages/MyProfile/MyProfile.tsx';
import FriendProfile from './components/Navbar/Pages/Friends/FriendProfile/FriendProfile.tsx';
import Popup from './components/Popup/Popup.tsx';
import { Context } from './Context.tsx';

const App: React.FC = () => {
   const [activePopup, setActivePopup] = React.useState(false);
   const popUpLoginMenu = () => {
      setActivePopup(!activePopup);
   };
   return (
      <Context.Provider value={{ popUpLoginMenu, activePopup, setActivePopup }}>
         <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-container__popup">
               <div className="app-wrapper__popup ">
                  <Popup />
               </div>
            </div>

            <div className="app-wrapper-content">
               <Routes>
                  <Route path="/news" element={<News />} />
                  <Route path="/friends" element={<Friends />} />
                  <Route path="/myprofile" element={<MyProfile />} />
                  <Route path="/profilePage" element={<FriendProfile />} />
               </Routes>
            </div>
         </div>
      </Context.Provider>
   );
};

export default App;
