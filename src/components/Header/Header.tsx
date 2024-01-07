import React from 'react';
import styles from './Header.module.scss';
import LogIn from './LogInMenu/LoginMenu.tsx';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <div className={styles.header__container}>
         <div className={styles.header__wrapper}>
            <div>SOCIAL</div>
         
               <LogIn />
        
         </div>
      </div>
   );
};

export default Header;
