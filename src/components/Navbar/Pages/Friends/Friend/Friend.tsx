import React from 'react';
import styles from './Friend.module.scss';

export const Friend: React.FC = ({ name, gender, image, location, species }) => {
   return (
      <div className={styles.friend__container}>
         <div className={styles.friend__wrapper}>
            <div className={styles.image__wrapper}>
               <img src={image}></img>
               <div className={styles.button__wrapper}>
                  <button className={styles.button__addTo_friend}>добавить в друзья</button>
                  <button className={styles.button__send_message}>написать сообщение</button>
               </div>
            </div>
            <div className={styles.span__wrapper}>
               <span className={styles.span__name}>{name}</span>
               <span className={styles.span__gender}>{gender} </span>
               <span className={styles.span__location}> Location: {location.name} </span>
               <span className={styles.span__species}> Species: {species} </span>
            </div>
         </div>
      </div>
   );
};
