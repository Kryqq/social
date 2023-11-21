import React from 'react';
import styles from './Friends.module.scss';
import { Friend } from './Friend/Friend.tsx';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFriends } from '../../../../redux/slices/FriendSlice/FrinendsSlice.ts';

const Friends: React.FC = () => {
   const dispatch = useDispatch();
   const friends = useSelector((state: any) => state.friends.friends.results);

   React.useEffect(() => {
      //@ts-ignore
      dispatch(fetchFriends());
   }, [fetchFriends]);

   return (
      <div>
         {friends ? (
            <div className={styles.friends__wrapper}>
               {friends.map((friend: any) => (
                  <Friend key={friend.id} {...friend} />
               ))}
            </div>
         ) : (
            'загрузка'
         )}
      </div>
   );
};

export default Friends;
