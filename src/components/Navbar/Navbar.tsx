import React from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
const Header = () => {
   return (
      <div className={styles.navbar__container}>
         <div className={styles.navbar__wrapper}>
            <Link to="/myProfile">Профиль</Link>
            <Link to="/possibleFriends">Возможные друзья</Link>
            <Link to="/news">Новости</Link>
         </div>
      </div>
   );
};

export default Header;
