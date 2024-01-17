import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Filters, Sort, sortPropertyEnum } from './types.ts';

const initialState: Filters = {
   searchValue: '',
   sortValue: { name: '', sortProperty: sortPropertyEnum.all },
};

const filtersSlice = createSlice({
   name: 'FiltersSlice',
   initialState,
   reducers: {
      filterPossibleFriendSlice(state, action: PayloadAction<string>) {
         state.searchValue = action.payload;
      },
      setSortPossibleFriendSlice(state, action: PayloadAction<Sort>) {
		state.sortValue = action.payload;
	 },
   },
});

export const { filterPossibleFriendSlice, setSortPossibleFriendSlice } = filtersSlice.actions;

export default filtersSlice.reducer;
