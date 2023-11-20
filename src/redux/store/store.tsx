import { configureStore } from '@reduxjs/toolkit';
import friends from '../slices/FriendSlice/FrinendsSlice.ts';

export const store = configureStore({
   reducer: {
      friends,
   },
});
