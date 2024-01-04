import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import govnoJopa from '../slices/FriendSlice/FrinendsSlice.ts';
import { useDispatch } from 'react-redux';
import myProfileSlice from '../slices/MyProfileSlice/MyProfileSlice.ts';
import logger from 'redux-logger'

export const store = configureStore({
   reducer: {
      govnoJopa,
      myProfileSlice,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(...(process.env.NODE_END !== 'production' ? [logger] : [])),
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
