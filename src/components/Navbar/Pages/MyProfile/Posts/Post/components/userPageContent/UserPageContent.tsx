import React from 'react';
import styles from '../../../../MyProfile.module.scss';
import { Posts } from '../../../Posts.tsx';
import { addPost, removePost } from '../../../../../../../../redux/slices/MyProfileSlice/MyProfileSlice.ts';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../../../../../../../../redux/store/store.tsx';
const UserPageContent = () => {
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
      <div>
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

export default UserPageContent;
