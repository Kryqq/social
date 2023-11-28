import React from 'react';
import styles from './Post.module.scss';

const Post = ({ post }) => {
   return (
      <div className={styles.post__container}>
         <div className={styles.post__wrapper}>
            <div className={styles.post__image}>
               <img src="https://rickandmortyapi.com/api/character/avatar/558.jpeg"></img>
            </div>
            <div className={styles.post__content}>
               <div className={styles.post__content_upper}>ILON TUSK </div>
               <div className={styles.post__content_down}>{post} </div>
            </div>
         </div>
      </div>
   );
};

export default Post;
