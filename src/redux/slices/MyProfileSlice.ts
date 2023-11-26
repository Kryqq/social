import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
   avatar: 'https://rickandmortyapi.com/api/character/avatar/558.jpeg',
   name: 'Elon Tusk',
   posts: [],
   friends: [],
   isOnline: true,
};

const friendsSlice = createSlice({
   name: 'MyProfile',
   initialState,
   reducers: {},
});

export const {} = friendsSlice.actions;
export default friendsSlice.reducer;
