import React from 'react';
import myProfileState from '../../../redux/slices/MyProfileSlice/MyProfileSlice.tsx';
import { useSelector } from 'react-redux';
import { AddedFriend } from './AddedFriend.tsx/AddedFriend.tsx';
import styles from '../Pages/Friends/PossibleFriends.module.scss';
const AddedFriends = () => {
   const addedFriends = useSelector((state: { myProfileSlice: typeof myProfileState }) => state.myProfileSlice.friends);

   return (
      <div className={styles.friends}>
         <div>
            <div className={styles.friends__wrapper}>
               {addedFriends.map((friend) => (
                  <AddedFriend {...friend} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default AddedFriends;
