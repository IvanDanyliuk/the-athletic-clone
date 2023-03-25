import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../app/api/api';
import { PlayerModel } from '../../app/models/components';


export const createPlayer = createAsyncThunk(
  'players/createPlayer',
  async (playerData: PlayerModel, thunkAPI) => {
    try {
      const { data } = await api.createPlayer(playerData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.request.data);
    }
  }
);