import React, { useEffect } from 'react';
import styles from './Friends.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFriends } from '../../../../redux/slices/FriendSlice/FrinendsSlice.ts';

const Friends = () => {
   const dispatch = useDispatch();

   const friends = useSelector((state: any) => state.friends.friends.results);

   useEffect(() => {
      //@ts-ignore
      dispatch(fetchFriends());
   }, [fetchFriends]);

   return (
      <div className={styles.friends__wrapper}>
         {friends.map((obj: any) => (
            <ul>
               <img src={obj.image}></img>
            </ul>
         ))}
      </div>
   );
};

export default Friends;
