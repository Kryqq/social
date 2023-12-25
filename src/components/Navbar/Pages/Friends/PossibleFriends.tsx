import React from 'react';
import styles from './PossibleFriends.module.scss';

import { Friend } from './Friend/PossibleFriend.tsx';
import { useSelector } from 'react-redux';
import { fetchPossibleFriends, iFriendList } from '../../../../redux/slices/FriendSlice/FrinendsSlice.ts';

import { useAppDispatch } from '../../../../redux/store/store.tsx';

const Friends: React.FC = () => {
   const dispatch = useAppDispatch();
   const possibleFriends = useSelector((state: { govnoJopa: iFriendList }) => {
      return state.govnoJopa.possibleFriends;
   });

   React.useEffect(() => {
      dispatch(fetchPossibleFriends());
   }, [fetchPossibleFriends]);

   return (
      <div>
         {possibleFriends ? (
            <div className={styles.friends__wrapper}>
               {possibleFriends.map((friend: any) => (
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
