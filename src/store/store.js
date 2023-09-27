import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../store/userSlice";
import applyForm from "../store/applySlice";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore } from "redux-persist";
import { combineReducers } from '@reduxjs/toolkit';


const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducer = combineReducers({
  username: userSlice,
  apply: applyForm,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
