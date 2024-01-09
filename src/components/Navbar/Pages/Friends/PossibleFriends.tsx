import React from 'react';
import styles from './PossibleFriends.module.scss';

import { Friend } from './Friend/PossibleFriend.tsx';
import { useSelector } from 'react-redux';
import { fetchPossibleFriends, iFriendList } from '../../../../redux/slices/FriendSlice/FrinendsSlice.ts';

import { useAppDispatch } from '../../../../redux/store/store.tsx';
import { resultsFriends } from '../../../../redux/slices/FriendSlice/types.ts';

const Friends: React.FC = () => {
   const dispatch = useAppDispatch();
   const possibleFriends = useSelector((state: { possibleFriends: iFriendList }) => {
      return state.possibleFriends.possibleFriends;
   });

   React.useEffect(() => {
      dispatch(fetchPossibleFriends());
   }, [fetchPossibleFriends]);

   return (
      <main>
         <h1>Возомжные друзья</h1>
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
      </main>
   );
};

export default Friends;
