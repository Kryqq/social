import React from 'react';
import styles from './Friend.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFriends } from '../../../../../redux/slices/FriendSlice/FrinendsSlice.ts';
import { useEffect } from 'react';

const Friend = () => {
   const dispatch = useDispatch();

   const friends = useSelector((state: any) => state.friends.friends.results);

   useEffect(() => {
      //@ts-ignore
      dispatch(fetchFriends());
   }, [fetchFriends]);

   debugger;
   return (
      <div>
         <div className={styles.friend__wrapper}>
            {friends.map((obj: any) => (
               <ul>
                  <img src={obj.image}></img>
               </ul>
            ))}
         </div>
      </div>
   );
};

export default Friend;
