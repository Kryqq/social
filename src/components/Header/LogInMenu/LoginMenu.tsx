import React, { useContext } from 'react';
import styles from './LoginMenu.module.scss';
import { useAppDispatch } from '../../../redux/store/store.tsx';
import { logoutUser } from '../../../redux/auth/actionCreators.ts';
import { useNavigate } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../../../hooks/uiHooks/themes.ts';

const LoginMenu = () => {
   const [isOpen, setOpen] = React.useState(false);
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   const handleLogout = () => {
      dispatch(logoutUser());
      navigate('/');
   };
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   const colorMode: any = useContext(ColorModeContext);

   return (
      <div className={styles.loginMenu__container}>
         <div className={styles.loginMenu}>
            <div className={styles.loginMenu__wrapper}>
               <div className={styles.loginMenu__svg} onClick={colorMode.toggleColorMode}>
                  <IconButton>{theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}</IconButton>
               </div>
               <div className={styles.loginMenu__userLogin}>
                  <button onClick={() => setOpen(!isOpen)} className={styles.loginMenu__userLoginBtn}>
                     Login
                  </button>
                  <div className={isOpen ? styles.popupContentMenuActive : styles.popupContentMenu}>
                     <div className={styles.popupContent} onClick={handleLogout}>
                        Выйти из профиля
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LoginMenu;
