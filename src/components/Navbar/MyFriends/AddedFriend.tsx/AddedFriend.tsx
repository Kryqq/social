import React from 'react';
import styles from './AddedFriend.module.scss';
import { useAppDispatch } from '../../../../../src/redux/store/store.tsx';
import { removeFriend } from '../../../../../src/redux/slices/MyProfileSlice/MyProfileSlice.ts';
import { Link } from 'react-router-dom';

export interface AddedFriendProps {
   id: number;
   name: string;
   gender: string;
   image: string;
   location: string;
   species: string;
}

export const AddedFriend: React.FC<AddedFriendProps> = ({ id, name, gender, image, location, species }) => {
   const dispatch = useAppDispatch();
   const deleteFriend = () => {
      dispatch(removeFriend(id));
   };

   //  const handleAddFriend = () => {
   //     dispatch(addFriend({ id, name, gender, image, location, species }));
   //     dispatch(deleteFriendSlice(id));
   //  };

   return (
      <main className={styles.friend__container}>
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
                     Удалить из друзей
                  </button>
                  <button className={styles.button__send_message}>
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
                        <path d="M8 9h8" />
                        <path d="M8 13h6" />
                        <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                     </svg>
                     Написать сообщение
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
      </main>
   );
};
