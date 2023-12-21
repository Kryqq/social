import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState = {
   
} 

const myProfileSlice = createSlice({
   name: 'MyFriendsListSlice',
   initialState,
   reducers: {
      addPost(state, action: PayloadAction) {
	
        
	  
      },

      removePost(state, action) {
        

       
      },
   },
});

export const { addPost, removePost } = myProfileSlice.actions;


export default myProfileSlice.reducer;
