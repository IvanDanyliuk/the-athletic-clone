import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../app/api/api';
import { IDeleteUserData, ILoginCredentials, IUser, IUserRequestData } from './types';


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

export const getAuthenticatedUser = createAsyncThunk(
  'users/getAuthenticatedUser',
  async (_: undefined, thunkAPI) => {
    try {
      const { data } = await api.getAuthenticatedUser();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
);

export const getAllUsers = createAsyncThunk(
  'users/getAllUsers',
  async (requestData: IUserRequestData, thunkAPI) => {
    const { page, itemsPerPage, filterData, sortData } = requestData;
    try {
      const { data } = await api.getAllUsers(page, itemsPerPage, filterData, sortData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getUsersLocations = createAsyncThunk(
  'users/getUsersLocations',
  async (_: undefined, thunkAPI) => {
    try {
      const { data } = await api.getUsersLocations();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'materials/deleteUser',
  async (deleteData: IDeleteUserData, thunkAPI) => {
    const { id, page, itemsPerPage } = deleteData;
    try {
      const { data } = await api.deleteUser(id, page, itemsPerPage);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);