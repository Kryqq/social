import React from 'react';
import styles from './MyProfile.module.scss';
import UserCard from './Posts/Post/components/userCard/UserCard.tsx';
import UserPageContent from './Posts/Post/components/userPageContent/UserPageContent.tsx';

const MyProfile: React.FC = () => {
   return (
      <div className={styles.myProfile__container}>
         <UserCard />
         <UserPageContent />
      </div>
   );
};

export default MyProfile;
