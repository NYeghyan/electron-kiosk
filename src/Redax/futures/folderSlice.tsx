import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface File  {
  filePath: string;
  name: string;
};

export interface Folder{
  name: string;
  files: File[];
};


export interface CounterState {
  value: Folder[];
}

const initialState: CounterState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "folderData",
  initialState,
  reducers: {
    setFolderState: (state, action: PayloadAction<[Folder]>) => {
      const newArray = Object.entries(action.payload).map((entry) => entry[1]);
      const cleenArr =  newArray.filter(x => x.name !== ".tmp.drivedownload" && x.name !== "GoogleDrive") 
      state.value = cleenArr
    },
  
  },
});

// Action creators are generated for each case reducer function
export const { setFolderState } = counterSlice.actions;

export default counterSlice.reducer;
