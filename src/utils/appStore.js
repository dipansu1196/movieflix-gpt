import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

const appStore=configureStore({
 reducer :{
    user:userReducer,
    movie:movieReducer,
 },
 devTools: process.env.NODE_ENV !== 'production',
})
    
export  default appStore;