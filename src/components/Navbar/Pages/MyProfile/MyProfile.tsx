import React from 'react';
import styles from './MyProfile.module.scss';

const MyProfile = () => {
   return (
      <div className={styles.myProfile__container}>
         <div className={styles.myProfile__upperContent}>
            <div className={styles.profImg}>
               <img src="https://rickandmortyapi.com/api/character/avatar/558.jpeg"></img>
            </div>
            <div className={styles.profInfo}>
               <span>Elon Tusk</span>
               <span>Online</span>
            </div>
         </div>

         <div className={styles.myProfile__bottomContent}>
            <div className={styles.myProfile__functions}></div>
            <div className={styles.posts__wrapper}>
               <div className={styles.posts__area}>
                  <textarea className={styles.postArea}></textarea>
                  <button className={styles.postBtn}></button>
               </div>
               <div className={styles.posts__added}>posts</div>
            </div>
         </div>
      </div>
   );
};

export default MyProfile;
