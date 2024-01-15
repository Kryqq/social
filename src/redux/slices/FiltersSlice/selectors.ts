import { IRootState } from '../../store/store';

export const selectFiltersPossibleFriends = (state: IRootState) => state.filtersSlice;
