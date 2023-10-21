import { createSlice } from '@reduxjs/toolkit';
import { 
  getAuthenticatedUser, getUsers, login, logout, signup, 
  deleteUser, getUsersLocations, updateUser, createUser, updatePassword 
} from './asyncActions';
import { IUserInitialState } from './types';
import { StateStatus } from '../types';


const initialState: IUserInitialState = {
  status: StateStatus.Idle,
  user: null,
  data: {
    users: [],
    usersCount: 0
  },
  filters: null,
  countries: [],
  error: null
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    clearFilters: (state) => {
      state.filters = null;
    },
    clearError: (state) => {
      state.status = StateStatus.Idle;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(login.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(logout.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.user = null;
      })
      .addCase(logout.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(createUser.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.data.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(getAuthenticatedUser.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(getAuthenticatedUser.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.user = action.payload;
      })
      .addCase(getAuthenticatedUser.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(getUsers.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.data = action.payload;
      })
      .addCase(getUsers.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(getUsersLocations.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(getUsersLocations.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.countries = action.payload;
      })
      .addCase(getUsersLocations.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(updateUser.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.data.users = state.data.users.map(user => user._id === action.payload._id ? action.payload : user);
        state.user = state.user?._id === action.payload._id ? action.payload : state.user;
      })
      .addCase(updateUser.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(updatePassword.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.user = action.payload;
      })
      .addCase(updatePassword.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.data = {
          users: state.data.users.filter(user => user._id !== action.payload),
          usersCount: state.data.usersCount - 1
        }
      })
      .addCase(deleteUser.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
  }
});

export const { clearError, setFilters, clearFilters } = userSlice.actions;

export default userSlice.reducer;