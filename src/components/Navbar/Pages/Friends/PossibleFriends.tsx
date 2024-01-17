import styles from './PossibleFriends.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { Friend } from './Friend/PossibleFriend.tsx';
import { fetchPossibleFriends } from '../../../../redux/slices/FriendSlice/FrinendsSlice.ts';
import { useAppDispatch } from '../../../../redux/store/store.tsx';
import { resultsFriend } from '../../../../redux/slices/FriendSlice/types.ts';
import { TextField } from '@mui/material';
import { filterPossibleFriendSlice } from '../../../../redux/slices/FiltersSlice/FiltersSlice.ts';
import { selectPossibleFriends } from '../../../../redux/slices/FriendSlice/selectors.ts';

import SortPopUp from '../../../Sort/SortPopUp.tsx';
import { selectFiltersPossibleFriends } from '../../../../redux/slices/FiltersSlice/selectors.ts';

const Friends: React.FC = () => {
   const debounce = (func, delay) => {
      let timeoutId;
      return function (...args) {
         if (timeoutId) {
            clearTimeout(timeoutId);
         }
         timeoutId = setTimeout(() => {
            func(...args);
         }, delay);
      };
   };

   const dispatch = useAppDispatch();

   const [value, setValue] = React.useState<string>('');

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newInputValue = event.target.value;
      setValue(newInputValue);
      handleSearch(newInputValue);
   };

   const handleSearch = debounce((searchValue) => {
      dispatch(filterPossibleFriendSlice(searchValue));
   }, 500);

   const { possibleFriends, loading, error } = useSelector(selectPossibleFriends);

   const { searchValue } = useSelector(selectFiltersPossibleFriends);

   React.useEffect(() => {
      dispatch(fetchPossibleFriends());
   }, [fetchPossibleFriends]);

   return (
      <main>
         <h1 className={styles.possiblefriends}>
            Возомжные друзья
            <TextField
               id="outlined-controlled"
               label="Поиск друзей"
               type="text"
               placeholder="Поиск друзей"
               value={value}
               onChange={handleChange}
            ></TextField>
         </h1>

         <SortPopUp></SortPopUp>
         <div>
            {possibleFriends ? (
               <div className={styles.friends__wrapper}>
                  {possibleFriends
                     .filter((friend) => friend.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
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
