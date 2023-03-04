import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../app/api/api';
import { ILoginCredentials, IUser } from './types';


export const login = createAsyncThunk(
  'users/login',
  async (credentials: ILoginCredentials, thunkAPI) => {
    try {
      const { data } = await api.login(credentials);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const signup = createAsyncThunk(
  'users/signup',
  async (userData: IUser, thunkAPI) => {
    try {
      const { data } = await api.signup(userData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk(
  'users/logout',
  async (_: undefined, thunkAPI) => {
    try {
      await api.logout();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

