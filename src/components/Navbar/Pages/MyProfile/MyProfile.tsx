import React from 'react';
import styles from './MyProfile.module.scss';
import { useAppDispatch } from '../../../../redux/store/store.tsx';
import { useSelector } from 'react-redux';
import myProfileState from '../../../../redux/slices/MyProfileSlice/MyProfileSlice.ts';

const MyProfile = () => {
   const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
   const [post, setPost] = React.useState('');
   const dispatch = useAppDispatch();
   const statePosts = useSelector((state: { myProfileSlice: typeof myProfileState }) => state.myProfileSlice);

   const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setPost(e.target.value);
      console.log(post);
   };
   const addPost = () => {
      //  textAreaRef.current?.value
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
                  <button onClick={addPost} className={styles.postBtn}>
                     add post
                  </button>
               </div>
               <div className={styles.posts__added}>posts</div>
            </div>
         </div>
      </div>
   );
};

export default MyProfile;
