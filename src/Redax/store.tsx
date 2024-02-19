import { configureStore } from "@reduxjs/toolkit";
import folderSlice from "./futures/folderSlice";
import fileSlice from "./futures/fileSlice";

export const store = configureStore({
  reducer: {
    folderSlice: folderSlice,
    fileSlice: fileSlice

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
