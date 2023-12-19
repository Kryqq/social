import React from 'react';
import Post from './Post/Post.tsx';
import { useSelector } from 'react-redux';
import myProfileState from '../../../../redux/slices/MyProfileSlice/MyProfileSlice.tsx';

import { IPost } from '../../../../../redux/slices/MyProfileSlice/MyProfileSlice.tsx';

export const Posts: React.FC<IPost> = ({dispatchRemovePost}) => {
	
   const statePosts = useSelector((state: { myProfileSlice: typeof myProfileState }) => state.myProfileSlice.posts);


   return (
      <div className="Posts">
         {statePosts.length > 0
            ? statePosts.map((post: IPost) => <Post message={post.message} postId={post.postId} dispatchRemovePost={dispatchRemovePost}/>).reverse()
            : ''}
      </div>
   );
};
