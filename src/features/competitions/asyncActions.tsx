import { createAsyncThunk } from '@reduxjs/toolkit';
import { CompetitionModel } from '../../app/models/components';
import * as api from '../../app/api/api';


export const createCompetition = createAsyncThunk(
  'competitions/createCompetition',
  async (competitionData: CompetitionModel, thunkAPI) => {
    try {
      const { data } = await api.createCompetition(competitionData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);