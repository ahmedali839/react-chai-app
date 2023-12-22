import { configureStore } from "@reduxjs/toolkit" 
 import authSlice from "./authSlice"; 
 
const store = configureStore({ 
    reducer: { 
               auth: authSlice,
             // add more Slices here for Posts.
    }
});
 
export default store; 


