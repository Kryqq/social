import { configureStore } from '@reduxjs/toolkit';
import govnoJopa from '../slices/FriendSlice/FrinendsSlice.ts';
import { useDispatch } from 'react-redux';

export const store = configureStore({
   reducer: {
	govnoJopa,
   },
});
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();