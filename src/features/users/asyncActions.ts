import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../app/api/api';
import { UserModel } from '../../app/models/users';
import { ILoginCredentials, IUser, IUserPasswordUpdationData, IUserRequestData } from './types';


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
  async (userData: UserModel, thunkAPI) => {
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

export const createUser = createAsyncThunk(
  'users/createUser',
   async (userData: UserModel, thunkAPI) => {
    try {
      const { data } = await api.createUser(userData);
      return data;
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

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (requestData: IUserRequestData, thunkAPI) => {
    const { page, itemsPerPage, filterData, sortData } = requestData;
    try {
      const { data } = await api.getUsers(page, itemsPerPage, filterData, sortData);
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

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (userToUpdate: IUser, thunkAPI) => {
    try {
      const { data } = await api.updateUser(userToUpdate);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updatePassword = createAsyncThunk(
  'users/updatePassword',
  async (passwordUpdationData: IUserPasswordUpdationData, thunkAPI) => {
    const { id, newPassword, currPassword } = passwordUpdationData
    try {
      const { data } = await api.updatePassword(id, newPassword, currPassword);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id: string, thunkAPI) => {
    try {
      await api.deleteUser(id);
      return id;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);