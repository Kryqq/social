import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFriends = createAsyncThunk('friends/fetchFriendsStatus', (async) => {
   let x = fetch(`https://rickandmortyapi.com/api/character`).then((res) =>
      res.json().then((arr) => console.log(arr.results))
   );
   console.log(x);

});

interface iFriendList {
   friends: string[];
}
const initialState = {
   friends: [],
} as iFriendList;

const friendsSlice = createSlice({
   name: 'friends',
   initialState,
   reducers: {
      increment(state) {},
      decrement(state) {},
      incrementByAmount(state, action: PayloadAction<number>) {},
   },
});

export const {} = friendsSlice.actions;
export default friendsSlice.reducer;
