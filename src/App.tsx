import './App.scss';
import React from 'react';
import Header from './components/Header/Header.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import { Routes, Route } from 'react-router-dom';
import PossibleFriends from './components/Navbar/Pages/Friends/PossibleFriends.tsx';
import News from './components/Navbar/Pages/News/News.tsx';
import MyProfile from './components/Navbar/Pages/MyProfile/MyProfile.tsx';
import FriendProfile from './components/Navbar/Pages/Friends/FriendProfile/FriendProfile.tsx';
import Popup from './components/Popup/Popup.tsx';
import { Context } from './Context.tsx';
import AddedFriends from './components/Navbar/MyFriends/AddedFriends.tsx';

const App: React.FC = () => {
   const [activePopup, setActivePopup] = React.useState<boolean>(false);
   const [isLogged, setIsLogged] = React.useState<boolean>(false);

   const popUpLoginMenu = () => {
      setActivePopup(!activePopup);
   };

   return (
      <Context.Provider value={{ popUpLoginMenu }}>
         <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="popup__wrapper">
               <div className={activePopup ? 'app-container__popup__active' : 'app-container__popup'}>
                  <Popup />
               </div>
            </div>
            <div className="app-wrapper-content">
               <Routes>
                  <Route path="/news" element={<News />} />
                  <Route path="/possibleFriends" element={<PossibleFriends />} />
                  <Route path="/myFriends" element={<AddedFriends />} />
                  <Route path="/myprofile" element={<MyProfile />} />
                  <Route path="/possibleFriends/:possiblefriend/:id" element={<FriendProfile />} />
               </Routes>
            </div>
         </div>
      </Context.Provider>
   );
};

export default App;
