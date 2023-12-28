import React from 'react';
import styles from './AddedFriend.module.scss';
import { useAppDispatch } from '../../../../../src/redux/store/store.tsx';
import { removeFriend } from '../../../../../src/redux/slices/MyProfileSlice/MyProfileSlice.ts'
import { Link } from 'react-router-dom';

export const AddedFriend: React.FC = ({ id, name, gender, image, location, species }) => {
   const dispatch = useAppDispatch();
   const deleteFriend = () => {
      dispatch(removeFriend(id));
	 console.log('click')
   };

   //  const handleAddFriend = () => {
   //     dispatch(addFriend({ id, name, gender, image, location, species }));
   //     dispatch(deleteFriendSlice(id));
   //  };

   return (
      <div className={styles.friend__container}>
         <div className={styles.friend__wrapper}>
            <div className={styles.image__wrapper}>
               <Link to={`/possiblefriends/possiblefriend/${id}`}>
                  <img src={image}></img>
               </Link>
               <div className={styles.button__wrapper}>
                  <button onClick={deleteFriend} className={styles.button__addTo_friend}>
                     Удалить из друзей
                  </button>
                  <button className={styles.button__send_message}>Написать сообщение</button>
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
