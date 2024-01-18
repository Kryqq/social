import { resultsFriends, FriendsSliceState } from './types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const fetchPossibleFriends = createAsyncThunk<FriendsSliceState, undefined>(
   'friends/fetchFriends',
   async function () {
      try {
         const response = await fetch(`https://rickandmortyapi.com/api/character/`);

         const data = await response.json();

         return data;
      } catch (error) {
         console.error(error);
      }
   }
);

export interface iFriendList {
   possibleFriends: resultsFriends;
   loading: boolean;
   error: null | string;
}

const initialState = {
   possibleFriends: [],
   loading: false,
   error: null,
} as iFriendList;

const possibleFriends = createSlice({
   name: 'possibleFriends',
   initialState,
   reducers: {
      deleteFriendSlice(state, action: PayloadAction<number>) {
         state.possibleFriends = state.possibleFriends.filter((friend) => friend.id !== action.payload);
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchPossibleFriends.pending, (state, action) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchPossibleFriends.fulfilled, (state, action) => {
            state.possibleFriends = action.payload.results;

            state.loading = false;
            state.error = null;
         })
         .addCase(fetchPossibleFriends.rejected, (state, action) => {
            state.loading = false;
            state.error = 'Somthing went wrong';
         });
   },
});

export const { deleteFriendSlice} = possibleFriends.actions;
export default possibleFriends.reducer;
