import React from 'react';
import MyProfileFriend from './MyProfileFriend/MyProfileFriend.tsx';
import { useSelector } from 'react-redux';
import myProfileState from '../../../../redux/slices/MyProfileSlice/MyProfileSlice.tsx';

const MyProfileFriendsList = () => {
   const myProfileFriends = useSelector(
      (state: { myProfileSlice: typeof myProfileState }) => state.myProfileSlice.friends
   );

   return (
      <div>
         {myProfileFriends.map((friend) => (
            <MyProfileFriend key = {friend.id} {...friend} />
         ))}
      </div>
   );
};

export default MyProfileFriendsList;
