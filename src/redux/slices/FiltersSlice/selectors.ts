import { IRootState } from '../../store/store';

export const selectFiltersPossibleFriends = (state: IRootState) => state.filtersSlice;
export const SortPossibleFriendSliceSelector = (state: IRootState) => state.filtersSlice.sortValue;