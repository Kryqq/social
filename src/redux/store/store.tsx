import logger from 'redux-logger';
import possibleFriends from '../slices/FriendSlice/FrinendsSlice.ts';
import authSlice from '../auth/authReducer.ts';
import myProfileSlice from '../slices/MyProfileSlice/MyProfileSlice.ts';
import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '../slices/FiltersSlice/FiltersSlice.ts';

export const store = configureStore({
   reducer: {
      possibleFriends,
      myProfileSlice,
      authSlice,
      filtersSlice,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(...(process.env.NODE_ENV !== 'production' ? [logger] : [])),
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type IRootState = ReturnType<typeof store.getState>;
