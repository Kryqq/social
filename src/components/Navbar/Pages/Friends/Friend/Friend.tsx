import React from 'react';
import styles from './Friend.module.scss';

export const Friend: React.FC = ({ name, gender, image }) => {
   return (
      <div>
         <div className={styles.friend__wrapper}>
            <div className={styles.image__wrapper}>
               <img src={image}></img>
               <div className={styles.button__wrapper}>
                  <button className={styles.button__addTo_friend}>добавить в друзья</button>
                  <button className={styles.button__send_message}>написать сообщение</button>
               </div>
            </div>
            <div className={styles.span__name}>
               <span>{name}</span>
               <span>{gender}</span>
            </div>
         </div>
      </div>
   );
};
