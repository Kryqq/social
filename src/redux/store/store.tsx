import { configureStore } from '@reduxjs/toolkit';
import govnoJopa from '../slices/FriendSlice/FrinendsSlice.ts';
import { useDispatch } from 'react-redux';
import profileSlice from '../slices/MyProfileSlice/MyProfileSlice.ts';
export const store = configureStore({
   reducer: {
	govnoJopa,
	profileSlice,

   },
});
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();