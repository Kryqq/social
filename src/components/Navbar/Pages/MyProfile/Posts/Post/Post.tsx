import React from 'react';
import styles from './Post.module.scss';
import { IPost } from '../../../../../../redux/slices/MyProfileSlice/MyProfileSlice.ts';



const Post: React.FC<IPost>  = ({message, postId, dispatchRemovePost}) => {

	const handleRemovePost = () => {
		if (dispatchRemovePost) {
		  dispatchRemovePost(postId);
		}
	   };


   return (
      <div className={styles.post__container}>
         <div className={styles.post__wrapper}>
            <div className={styles.post__image}>
               <img src="https://rickandmortyapi.com/api/character/avatar/558.jpeg" alt="avatar"></img>
            </div>
            <div className={styles.post__content}>
               <div className={styles.post__content_upper}>
                  ILON TUSK
                  <button onClick={()=>handleRemovePost()} className={styles.post__deleteBtn}>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="-0.5 0 25 25"
                        fill="none"
                     >
                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                        <g id="SVGRepo_iconCarrier">
                           <path
                              d="M3 21.32L21 3.32001"
                              stroke="#000000"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                           <path
                              d="M3 3.32001L21 21.32"
                              stroke="#000000"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                        </g>
                     </svg>
                  </button>
               </div>
               <div className={styles.post__content_down}>{message}</div>
            </div>
         </div>
      </div>
   );
};

export default Post;
