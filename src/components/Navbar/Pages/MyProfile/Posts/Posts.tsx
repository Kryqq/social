import React from 'react';
import Post from './Post/Post.tsx';
import { useSelector } from 'react-redux';
import myProfileState from '../../../../redux/slices/MyProfileSlice/MyProfileSlice.tsx';

   
export const Posts = () => {

	
	const statePosts = useSelector((state: { myProfileSlice: typeof myProfileState }) => state.myProfileSlice.posts);
   
		
	return (

      <div className='Posts'>
		{statePosts.length > 0 ? statePosts.map((post:string)=> (<Post post={post}/>)): ''}
         
      </div>
   );
};
