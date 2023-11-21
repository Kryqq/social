
import { resultsFriends, FriendsSliceState } from './types';
import { createAsyncThunk, createSlice,} from '@reduxjs/toolkit';

export const fetchFriends = createAsyncThunk<resultsFriends[], undefined>('friends/fetchFriends', async function () {
   const response = await fetch(`https://rickandmortyapi.com/api/character`);
   const data = await response.json();

   return data;
});

export interface iFriendList {
   friends: resultsFriends[];
   loading: boolean;
   error: null | string;
}

const initialState = {
   friends: {},

   loading: false,
   error: null,
} as iFriendList;

const friendsSlice = createSlice({
   name: 'friends',
   initialState,
   reducers: {
      deleteFriend(state, action) {
		state.friends = state.friends.filter((friend)=>friend.name === action.payload);
		
	 },
    
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchFriends.pending, (state, action) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchFriends.fulfilled, (state, action) => {
            state.friends = action.payload;
		 state.loading = false;
            state.error = null;
         })
         .addCase(fetchFriends.rejected, (state, action) => {
            state.loading = false;
            state.error = 'Somthing went wrong';
         });
   },
});

export const {} = friendsSlice.actions;
export default friendsSlice.reducer;
