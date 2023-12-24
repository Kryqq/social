import React from 'react';
import styles from './PossibleFriend.module.scss';
import { useAppDispatch } from '../../../../../redux/store/store.tsx';
import { deleteFriendSlice } from '../../../../../redux/slices/FriendSlice/FrinendsSlice.ts';
import { Link } from 'react-router-dom';
import { addFriend } from '../../../../../redux/slices/MyProfileSlice/MyProfileSlice.ts';

export const Friend: React.FC = ({ id, name, gender, image, location, species }) => {
   const dispatch = useAppDispatch();
   const deleteFriend = () => {
      dispatch(deleteFriendSlice(id));
   };

   const handleAddFriend = () => {
      dispatch(addFriend({ id, name, gender, image, location, species }));
   };

   return (
      <div className={styles.friend__container}>
         <div className={styles.friend__wrapper}>
            <div className={styles.image__wrapper}>
               <Link to="/profilePage">
                  <img src={image}></img>
               </Link>
               <div className={styles.button__wrapper}>
                  <button onClick={deleteFriend} className={styles.button__addTo_friend}>
                     Удалить из друзей
                  </button>
                  <button onClick={handleAddFriend} className={styles.button__send_message}>
                     Добавить в друзья
                  </button>
               </div>
            </div>
            <div className={styles.span__wrapper}>
               <span className={styles.span__name}>
                  <Link to="/profilePage">{name}</Link>
               </span>
               <span className={styles.span__gender}>Gender: {gender} </span>
               <span className={styles.span__location}> Location: {location.name} </span>
               <span className={styles.span__species}> Species: {species} </span>
            </div>
         </div>
      </div>
   );
};
