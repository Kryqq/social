import React from 'react';
import styles from './FriendProfile.module.scss';

const FriendProfile = () => {
   return (
      <div>
         <div className={styles.friend__container}>
            <div className={styles.friend__wrapper}>
               <div className={styles.image__wrapper}>
                  <img></img>
               </div>
               <div className={styles.span__wrapper}>
                  <span className={styles.span__name}></span>
                  <span className={styles.span__gender}>Gender: </span>
                  <span className={styles.span__location}> Location: </span>
                  <span className={styles.span__species}> Species: </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FriendProfile;
