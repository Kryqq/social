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
      dispatch(deleteFriendSlice(id));
   };

   return (
      <div className={styles.friend__container}>
         <div className={styles.friend__wrapper}>
            <div className={styles.image__wrapper}>
               <Link to={`/possiblefriends/possiblefriend/${id}`}>
                  <img src={image}></img>
               </Link>
               <div className={styles.button__wrapper}>
                  <button onClick={deleteFriend} className={styles.button__addTo_friend}>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4c.348 0 .686 .045 1.009 .128" />
                        <path d="M16 19h6" />
                     </svg>
                     Больше не показывать
                  </button>
                  <button onClick={handleAddFriend} className={styles.button__send_message}>
                     <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M16 19h6" />
                        <path d="M19 16v6" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                     </svg>
                     Добавить в друзья
                  </button>
               </div>
            </div>
            <div className={styles.span__wrapper}>
               <span className={styles.span__name}>
                  <Link to={`/possiblefriends/possiblefriend/${id}`}>{name}</Link>
               </span>
               <span className={styles.span__gender}>Gender: {gender} </span>
               <span className={styles.span__location}> Location: {location.name} </span>
               <span className={styles.span__species}> Species: {species} </span>
            </div>
         </div>
      </div>
   );
};
