import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../app/api/api';
import { ScheduleModel } from '../../app/models/components';


export const createSchedule = createAsyncThunk(
  'schedules/createSchedule',
  async (scheduleData: ScheduleModel, thunkAPI) => {
    try {
      const { data } = await api.createSchedule(scheduleData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);