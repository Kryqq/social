import React from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
const Header = () => {
   return (
      <div className={styles.navbar__container}>
         <div className={styles.navbar__wrapper}>
            <Link className={styles.navbar__link} to="/myProfile">
               Профиль
            </Link>
            <Link className={styles.navbar__link} to="/myFriends">
               Мои друзья
            </Link>
            <Link className={styles.navbar__link} to="/possibleFriends">
               Возможные друзья
            </Link>
            <Link className={styles.navbar__link} to="/news">
               Новости
            </Link>
         </div>
      </div>
   );
};

export default Header;
