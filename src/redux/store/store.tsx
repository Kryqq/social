import { configureStore } from '@reduxjs/toolkit';
import govnoJopa from '../slices/FriendSlice/FrinendsSlice.ts';
import { useDispatch } from 'react-redux';
import myProfileSlice from '../slices/MyProfileSlice/MyProfileSlice.ts';
export const store = configureStore({
   reducer: {
	govnoJopa,
	myProfileSlice,

   },
});
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();