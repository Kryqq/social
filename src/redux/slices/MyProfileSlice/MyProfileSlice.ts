import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface myProfileState {
   avatar: string;
   name: string;
   posts: string[];
   friends: string[];
   isOnline: boolean;
}

const initialState = {
   avatar: 'https://rickandmortyapi.com/api/character/avatar/558.jpeg',
   name: 'Elon Tusk',
   posts: [],
   friends: [],
   isOnline: true,
} as myProfileState;

const myProfile = createSlice({
   name: 'MyProfile',
   initialState,
   reducers: {
      addPost(state, action: PayloadAction<string>) {
         state.posts.push(action.payload);
      },
   },
});

export const { addPost } = myProfile.actions;
export default myProfile.reducer;
