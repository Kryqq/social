import React from 'react';
import Post from './Post/Post.tsx';
import { useSelector } from 'react-redux';

export const Posts:React.FC  = () => {
   return (
      <div className='Posts'>
         <Post />
      </div>
   );
};
