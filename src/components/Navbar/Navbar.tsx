import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { Button } from '@mui/material';
import React from 'react';

const NavBar: React.FC = () => {
   return (
      <div className={styles.navbar__container}>
         <div className={styles.navbar__wrapper}>

            <Button>
               <Link to={'/myProfile'}> Профиль</Link>
            </Button>
            <Button>
               <Link to={'/myFriends'}> Мои друзья</Link>
            </Button>
            <Button>
               <Link to={'/possibleFriends'}> Возможные друзья</Link>
            </Button>
            <Button>
               <Link to={'/news'}>Новости</Link>
            </Button>
         </div>
      </div>
   );
};

export default NavBar;
