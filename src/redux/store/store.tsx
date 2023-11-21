import { configureStore } from '@reduxjs/toolkit';
import friends from '../slices/FriendSlice/FrinendsSlice.ts';
import { useDispatch } from 'react-redux';

export const store = configureStore({
   reducer: {
      friends,
   },
});
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();