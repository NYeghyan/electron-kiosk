import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface File {
        name: 'string',
        path: 'string'
}

export interface CounterState {
  value: File[];
}

const initialState: CounterState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setFileData: (state, action: PayloadAction<[]>) => {
      state.value = action.payload;
    },
  
  },
});

// Action creators are generated for each case reducer function
export const { setFileData } = counterSlice.actions;

export default counterSlice.reducer;
