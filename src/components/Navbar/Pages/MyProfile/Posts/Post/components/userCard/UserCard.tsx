import React from 'react';
import styles from '../../../../MyProfile.module.scss';
import MyProfileFriendsList from '../../../../MyProfileFriendsList/MyProfileFriendsList.tsx';
const UserCard = () => {
   return (
      <main className={styles.myProfile__upperContent}>
         <div className={styles.profImg}>
            <img src="https://rickandmortyapi.com/api/character/avatar/558.jpeg" alt="avatart"></img>
            <div className={styles.addedFriends}>
               <MyProfileFriendsList />
            </div>
         </div>
         <div className={styles.profInfo}>
            <div className={styles.profInfoName}>Elon Tusk</div>
            <div>Online</div>
         </div>
      </main>
   );
};

export default UserCard;
