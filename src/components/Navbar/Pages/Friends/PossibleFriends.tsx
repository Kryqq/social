import React from 'react';
import { useSelector } from 'react-redux';
import styles from './PossibleFriends.module.scss';

import { Friend } from './Friend/PossibleFriend.tsx';

import { fetchPossibleFriends, iFriendList } from '../../../../redux/slices/FriendSlice/FrinendsSlice.ts';
import { useAppDispatch } from '../../../../redux/store/store.tsx';
import { resultsFriend } from '../../../../redux/slices/FriendSlice/types.ts';

const Friends: React.FC = () => {
   const dispatch = useAppDispatch();
   const inputRef = React.useRef<HTMLInputElement>(null);

   const [value, setValue] = React.useState<string>('');

   const inputChange = () => {
      if (inputRef.current) {
         setValue(inputRef.current.value);
      }
   };

   const possibleFriends = useSelector((state: { possibleFriends: iFriendList }) => {
      return state.possibleFriends.possibleFriends;
   });

   React.useEffect(() => {
      dispatch(fetchPossibleFriends());
   }, [fetchPossibleFriends]);

   return (
      <main>
         <h1 className={styles.possiblefriends}>
            Возомжные друзья
            <input type="text" placeholder="Поиск друзей" value={value} ref={inputRef} onChange={inputChange}></input>
         </h1>
         <div>
            {possibleFriends ? (
               <div className={styles.friends__wrapper}>
                  {possibleFriends
                     .filter((friend) => friend.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
                     .map((friend: resultsFriend) => (
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
