import React from 'react';
import MyProfileFriend from './MyProfileFriend/MyProfileFriend.tsx';
import { useSelector } from 'react-redux';
import myProfileState from '../../../../redux/slices/MyProfileSlice/MyProfileSlice.tsx';
import styles from '../../MyProfile/MyProfile.module.scss';
const MyProfileFriendsList = () => {
   const myProfileFriends = useSelector(
      (state: { myProfileSlice: typeof myProfileState }) => state.myProfileSlice.friends
   );
   const myProfileFriendsShowed = useSelector(
      (state: { myProfileSlice: typeof myProfileState }) => state.myProfileSlice.friends.slice(0, 3)
   );

   return (
      <div>
         <h1>Друзья</h1>
         <div className={styles.addedProfileFriendsPopup}>
            {myProfileFriends.map((friend) => (
               <MyProfileFriend key={friend.id} {...friend} />
            ))}
         </div>
         <div>
            <div className={styles.myProfileFriendsShowed}>
               {myProfileFriendsShowed.map((friend) => (
                  <MyProfileFriend key={friend.id} {...friend} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default MyProfileFriendsList;
