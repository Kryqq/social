import React from 'react';
import styles from './Friends.module.scss';

import { Friend } from './Friend/Friend.tsx';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFriends } from '../../../../redux/slices/FriendSlice/FrinendsSlice.ts';
import { FriendsSliceState } from '../../../../redux/slices/FriendSlice/types.ts';
import { useAppDispatch } from '../../../../redux/store/store.tsx';

const Friends: React.FC = () => {
   const dispatch = useAppDispatch();
   const friends = useSelector((state: FriendsSliceState) => state.friends.friends.results);

   React.useEffect(() => {
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
