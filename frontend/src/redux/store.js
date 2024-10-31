import { configureStore , combineReducers} from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
