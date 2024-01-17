import React from 'react';
import styles from './FriendProfile.module.scss';
import { useParams } from 'react-router-dom';

const FriendProfile = () => {
   const { id } = useParams();

   const [friends, setFriends] = React.useState();

   React.useEffect(() => {
      async function fetchFriends() {
         try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/` + id);
            let data = await response.json();
            setFriends(data);
         } catch (error) {
            alert(console.error(error));
         }
      }

      fetchFriends();
   }, []);

   if (!friends) {
      return 'Загрузка...';
   }

   return (
      <div className={styles.myProfile__container}>
         <div className={styles.myProfile__upperContent}>
            <div className={styles.profImg}>
               <img src={friends.image} alt="avatart"></img>
               <div className={styles.addedFriends}></div>
            </div>
            <div className={styles.profInfo}>
               <span>{friends.name}</span>
               <span>Online</span>
            </div>
         </div>

         <div className={styles.myProfile__bottomContent}>
            <div className={styles.myProfile__functions}></div>
            <div className={styles.posts__wrapper}>
               <div className={styles.posts__area}></div>
               <div className={styles.posts__added}></div>
            </div>
         </div>
      </div>
   );
};

export default FriendProfile;
