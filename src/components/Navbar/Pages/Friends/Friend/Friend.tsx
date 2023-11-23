import React from 'react';
import styles from './Friend.module.scss';
import { useAppDispatch } from '../../../../../redux/store/store.tsx';
import { deleteFriendSlice } from '../../../../../redux/slices/FriendSlice/FrinendsSlice.ts';

export const Friend: React.FC = ({ id, name, gender, image, location, species }) => {
   const dispatch = useAppDispatch();
   const deleteFriend = () => {
      dispatch(deleteFriendSlice(id));
   };

   return (
      <div className={styles.friend__container}>
         <div className={styles.friend__wrapper}>
            <div className={styles.image__wrapper}>
               <img src={image}></img>
               <div className={styles.button__wrapper}>
                  <button onClick={deleteFriend} className={styles.button__addTo_friend}>
                     Удалить из друзей
                  </button>
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
