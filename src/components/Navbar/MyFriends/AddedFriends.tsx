import React from 'react';
import { useSelector } from 'react-redux';
import myProfileState from '../../../redux/slices/MyProfileSlice/MyProfileSlice.ts';
import styles from '../Pages/Friends/PossibleFriends.module.scss';
import { Friend } from '../Pages/Friends/Friend/PossibleFriend.tsx';
const AddedFriends = () => {
   const addedFriends = useSelector((state: { myProfileSlice: typeof myProfileState }) => state.myProfileSlice.friends);

   return (
      <div className={styles.friends}>
         <div>
            <div className={styles.friends__wrapper}>
               {addedFriends.map((friend) => (
                  <Friend {...friend} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default AddedFriends;
