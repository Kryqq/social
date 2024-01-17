import React from 'react';
import MyProfileFriend from './MyProfileFriendList/MyProfileFriend.tsx';
import { useSelector } from 'react-redux';
import myProfileState from '../../../../redux/slices/MyProfileSlice/MyProfileSlice.tsx';
import styles from '../../MyProfile/MyProfile.module.scss';
import { Link } from 'react-router-dom';
import { myProfileStateFriends } from '../../../../../redux/slices/MyProfileSlice/selectors.ts';
const MyProfileFriendsList = () => {
   const myProfileFriendsShowed = useSelector(myProfileStateFriends);

   return (
      <div className={styles.friends}>
         <Link to={`/myFriends`}>
            <h1>Друзья</h1>
         </Link>

         <div>
            <div className={styles.myProfileFriendsShowed}>
               {myProfileFriendsShowed.slice(0,3).map((friend) => (
                  <Link to={`/possiblefriends/possiblefriend/${friend.id}`}>
                     <MyProfileFriend key={friend.id} {...friend} />
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
};

export default MyProfileFriendsList;
