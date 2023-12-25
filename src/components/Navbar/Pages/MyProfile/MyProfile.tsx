import React from 'react';
import styles from './MyProfile.module.scss';
import { useAppDispatch } from '../../../../redux/store/store.tsx';
import { v4 as uuidv4 } from 'uuid';
import { Posts } from './Posts/Posts.tsx';
import { addPost } from '../../../../redux/slices/MyProfileSlice/MyProfileSlice.ts';
import { removePost } from '../../../../redux/slices/MyProfileSlice/MyProfileSlice.ts';
import MyProfileFriendsList from './MyProfileFriendsList/MyProfileFriendsList.tsx';
import { Link } from 'react-router-dom';

const MyProfile: React.FC = () => {
   const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

   const [postConstructor, setPostConstructor] = React.useState<string>('');
   const dispatch = useAppDispatch();

   const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const postContent = e.target.value;
      setPostConstructor(postContent);
   };
   const postId = uuidv4();

   const dispatchAddPost = () => {
      if (!postConstructor) return;
      const message = postConstructor;
      const newPost = {
         postId: postId,
         message: message,
      };

      dispatch(addPost(newPost));
      setPostConstructor('');
   };
   const dispatchRemovePost = (postId: string) => {
      dispatch(removePost(postId));
   };

   return (
      <div className={styles.myProfile__container}>
         <div className={styles.myProfile__upperContent}>
            <div className={styles.profImg}>
               <img src="https://rickandmortyapi.com/api/character/avatar/558.jpeg" alt="avatart"></img>
               <div className={styles.addedFriends}>
                  <MyProfileFriendsList />
               </div>
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
                  <textarea
                     onChange={onChange}
                     ref={textAreaRef}
                     value={postConstructor}
                     className={styles.postArea}
                  ></textarea>
                  <button onClick={dispatchAddPost} className={styles.postBtn}>
                     add post
                  </button>
               </div>
               <div className={styles.posts__added}>
                  {<Posts message={postConstructor} postId={postId} dispatchRemovePost={dispatchRemovePost} />}
               </div>
            </div>
         </div>
      </div>
   );
};

export default MyProfile;
