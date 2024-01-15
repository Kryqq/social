import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import styles from './PossibleFriends.module.scss';
import { Friend } from './Friend/PossibleFriend.tsx';
import { fetchPossibleFriends, iFriendList } from '../../../../redux/slices/FriendSlice/FrinendsSlice.ts';
import { useAppDispatch } from '../../../../redux/store/store.tsx';
import { resultsFriend } from '../../../../redux/slices/FriendSlice/types.ts';
import { Button, TextField } from '@mui/material';
import { searchType } from '../../../../redux/slices/FiltersSlice/types.ts';
import { filterPossibleFriendSlice } from '../../../../redux/slices/FiltersSlice/FiltersSlice.ts';

const Friends: React.FC = () => {
   const dispatch = useAppDispatch();
   const [value, setValue] = React.useState<string>('');
   const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newInputValue = event.target.value;

      setValue(newInputValue);
      dispatch(filterPossibleFriendSlice(newInputValue));
   };
   const possibleFriends = useSelector((state: { possibleFriends: iFriendList }) => {
      return state.possibleFriends.possibleFriends;
   });

   const searchValue = useSelector((state: { filtersSlice: searchType }) => state.filtersSlice.searchValue);

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
               onChange={inputChange}
            ></TextField>
            <Button></Button>
            <Button></Button>
            <Button></Button>
         </h1>
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
