import './App.scss';
import React from 'react';
import Header from './components/Header/Header.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import { Routes, Route } from 'react-router-dom';
import PossibleFriends from './components/Navbar/Pages/Friends/PossibleFriends.tsx';
import News from './components/Navbar/Pages/News/News.tsx';
import MyProfile from './components/Navbar/Pages/MyProfile/MyProfile.tsx';
import FriendProfile from './components/Navbar/Pages/Friends/FriendProfile/FriendProfile.tsx';
import LoginMenu from './components/Popup/LoginMenu.tsx';
import AddedFriends from './components/Navbar/MyFriends/AddedFriends.tsx';
import { ColorModeContext, useMode } from './hooks/uiHooks/themes.ts';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import { IRootState } from './redux/store/store.tsx';

const App: React.FC = () => {
   const [theme, colorMode] = useMode();
   const isLoggedIn = true //useSelector((state: IRootState) => !!state.authSlice.authData.accessToken);

   return (
      <ColorModeContext.Provider value={colorMode}>
         <ThemeProvider theme={theme}>
            <CssBaseline>
               {isLoggedIn ? (
                  <div className="app-wrapper">
                     <Header />
                     <Navbar />
                     <Navbar />

                     <div className="app-wrapper-content">
                        <Routes>
                           <Route path="/" element={<LoginMenu />} />
                           <Route path="/news" element={<News />} />
                           <Route path="/possibleFriends" element={<PossibleFriends />} />
                           <Route path="/myFriends" element={<AddedFriends />} />
                           <Route path="/myprofile" element={<MyProfile />} />
                           <Route path="/possibleFriends/:possiblefriend/:id" element={<FriendProfile />} />
                        </Routes>
                     </div>
                  </div>
               ) : (
                  <LoginMenu />
               )}
            </CssBaseline>
         </ThemeProvider>
      </ColorModeContext.Provider>
   );
};

export default App;
