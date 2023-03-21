import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../app/api/api';
import { ClubModel } from '../../app/models/components';

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
)