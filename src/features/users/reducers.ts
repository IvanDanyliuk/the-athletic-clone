import { createSlice } from '@reduxjs/toolkit';
import { login, logout, signup } from './asyncActions';
import { IUserInitialState } from './types';


const initialState: IUserInitialState = {
  status: 'idle',
  user: null,
  error: null
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearError: (state) => {
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(login.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(logout.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = null;
      })
      .addCase(logout.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
  }
});

export const { clearError } = userSlice.actions;

export default userSlice.reducer;