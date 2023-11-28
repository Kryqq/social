import React from 'react';
import styles from './MyProfile.module.scss';
import { useAppDispatch } from '../../../../redux/store/store.tsx';


import { Posts } from './Posts/Posts.tsx';
import { addPost } from '../../../../redux/slices/MyProfileSlice/MyProfileSlice.ts';

const MyProfile: React.FC = () => {
   const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
   const [post, setPost] = React.useState('');
   const dispatch = useAppDispatch();
  



   const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setPost(e.target.value);

   };



   const dispatchAddPost = () => {
      //  textAreaRef.current?.value
      dispatch(addPost(post));
   };
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
                  <textarea onChange={onChange} ref={textAreaRef} value={post} className={styles.postArea}>
                     {post}
                  </textarea>
                  <button onClick={dispatchAddPost} className={styles.postBtn}>
                     add post
                  </button>
               </div>
               <div className={styles.posts__added}>
                 
                  {<Posts/>}
               </div>
            </div>
         </div>
      </div>
   );
};

export default MyProfile;
