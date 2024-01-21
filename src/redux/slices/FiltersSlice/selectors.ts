import { IRootState } from '../../store/store';
//переписать
export const selectFiltersPossibleFriends = (state: IRootState) => state.filtersSlice;
export const SortPossibleFriendSliceSelector = (state: IRootState) => state.filtersSlice;