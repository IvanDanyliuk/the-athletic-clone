import { createSlice } from "@reduxjs/toolkit";
import { IUserInitialState } from "./types";


const initialState: IUserInitialState = {
  status: 'idle',
  user: null,
  error: null
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
      
  }
});

export const {  } = userSlice.actions;

export default userSlice.reducer;