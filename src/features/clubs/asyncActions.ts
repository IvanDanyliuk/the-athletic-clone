import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../app/api/api';
import { ClubModel } from '../../app/models/components';
import { IClub, IClubsRequestData, IDeleteClubData } from './types';

export const createClub = createAsyncThunk(
  'clubs/createClub',
  async (clubData: ClubModel, thunkAPI) => {
    try {
      const { data } = await api.createClub(clubData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getAllClubs = createAsyncThunk(
  'clubs/getAllClubs',
  async (requestData: IClubsRequestData, thunkAPI) => {
    const { page, itemsPerPage, filterData, sortData } = requestData;
    try {
      const { data } = await api.getAllClubs(page, itemsPerPage, filterData, sortData,);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateClub = createAsyncThunk(
  'clubs/updateClub',
  async (clubToUpdate: IClub, thunkAPI) => {
    try {
      const { data } = await api.updateClub(clubToUpdate);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteClub = createAsyncThunk(
  'clubs/deleteClubs',
  async (deleteData: IDeleteClubData, thunkAPI) => {
    const { id, page, itemsPerPage } = deleteData;
    try {
      const { data } = await api.deleteClub(id, page, itemsPerPage);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.error);
    }
  }
);