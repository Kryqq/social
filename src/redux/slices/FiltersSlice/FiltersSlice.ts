import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { searchType } from './types';

const initialState: searchType = {
   searchValue: '',
};

const filtersSlice = createSlice({
   name: 'FiltersSlice',
   initialState,
   reducers: {
      filterPossibleFriendSlice(state, action: PayloadAction<string>) {
         state.searchValue = action.payload;
      },
   },
});

export const {filterPossibleFriendSlice} = filtersSlice.actions;

export default filtersSlice.reducer;
