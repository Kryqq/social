import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
   return (
      <div className={styles.header__container}>
         <div className={styles.header__wrapper}>
            <div>SOCIAL</div>
         </div>
      </div>
   );
};

export default Header;
