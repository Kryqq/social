import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPost {
   message: string;
   postId: string;
   dispatchRemovePost?: (postId: string) => void
}

interface MyProfileState {
	avatar: string;
	name: string;
	posts: IPost[];
	friends: string[];
	isOnline: boolean;
}
//РАЗОБРАТЬСЯ С РАЗНИЦЕЙ ИНТЕРФЕЙСА И КЛАССА
// class MyProfileState {
// 	avatar: string;
// 	name: string;
// 	posts: IPost[];
// 	friends: string[];
// 	isOnline: boolean;
// }

const initialState = {
   avatar: 'https://rickandmortyapi.com/api/character/avatar/558.jpeg',
   name: 'Elon Tusk',
   posts: [],
   friends: [],
   isOnline: true,
} as MyProfileState;

const myProfileSlice = createSlice({
   name: 'MyProfile',
   initialState,
   reducers: {
      addPost(state, action: PayloadAction<IPost>) {
	
         state.posts.push(action.payload);
	  
      },
      removePost(state, action) {
         state.posts = state.posts.filter((post) => post.postId !== action.payload);

         console.log('DELETED', state.posts, action.payload.id);
      },
   },
});

export const { addPost, removePost } = myProfileSlice.actions;
export default myProfileSlice.reducer;
