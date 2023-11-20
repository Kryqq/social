import React from 'react';
import styles from './Friends.module.scss';
import Friend from './Friend/Friend.tsx';

const Friends: React.FC = () => {
   return (
      <div className={styles.friends__wrapper}>
         <Friend />
      </div>
   );
};

export default Friends;
