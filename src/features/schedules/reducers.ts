import { createSlice } from '@reduxjs/toolkit';
import { createSchedule, updateSchedule, deleteSchedule, getSchedules } from './asyncActions';
import { ISchedulesInitialState } from './types';


const initialState: ISchedulesInitialState = {
  status: 'idle',
  data: {
    schedules: [],
    schedulesCount: 0
  },
  filters: null,
  error: null
};


const schedulesSlice = createSlice({
  name: 'schedules',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    clearFilters: (state) => {
      state.filters = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSchedule.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createSchedule.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.schedules.push(action.payload);
      })
      .addCase(createSchedule.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(getSchedules.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getSchedules.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getSchedules.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(updateSchedule.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateSchedule.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.schedules = state.data.schedules.map(schedule => schedule._id === action.payload._id ? action.payload : schedule);
      })
      .addCase(updateSchedule.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(deleteSchedule.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(deleteSchedule.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(deleteSchedule.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
  }
});

export const { setFilters, clearFilters, clearError } = schedulesSlice.actions;

export default schedulesSlice.reducer;