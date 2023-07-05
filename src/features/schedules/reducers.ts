import { createSlice } from '@reduxjs/toolkit';
import { 
  createSchedule, updateSchedule, deleteSchedule, getSchedules, 
  getRecentMatches, getSchedule, getSchedulesByClub 
} from './asyncActions';
import { ISchedulesInitialState } from './types';
import { FAILED_STATUS, IDLE_STATUS, LOADING_STATUS, SUCCEEDED_STATUS } from '../../app/constants/common';


const initialState: ISchedulesInitialState = {
  status: IDLE_STATUS,
  data: {
    main: {
      schedules: [],
      schedulesCount: 0
    },
    schedule: null,
    latestMatches: []
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
    clearSchedule: (state) => {
      state.data.schedule = null;
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
        state.status = LOADING_STATUS;
      })
      .addCase(createSchedule.fulfilled, (state, action) => {
        state.status = SUCCEEDED_STATUS;
        state.data.main.schedules.push(action.payload);
      })
      .addCase(createSchedule.rejected, (state, action: any) => {
        state.status = FAILED_STATUS;
        state.error = action.payload.error;
      })
      .addCase(getSchedules.pending, (state, action) => {
        state.status = LOADING_STATUS;
      })
      .addCase(getSchedules.fulfilled, (state, action) => {
        state.status = SUCCEEDED_STATUS;
        state.data.main = action.payload;
      })
      .addCase(getSchedules.rejected, (state, action: any) => {
        state.status = FAILED_STATUS;
        state.error = action.payload.error;
      })
      .addCase(getSchedulesByClub.pending, (state, action) => {
        state.status = LOADING_STATUS;
      })
      .addCase(getSchedulesByClub.fulfilled, (state, action) => {
        state.status = SUCCEEDED_STATUS;
        state.data.main = action.payload;
      })
      .addCase(getSchedulesByClub.rejected, (state, action: any) => {
        state.status = FAILED_STATUS;
        state.error = action.payload.error;
      })
      .addCase(getSchedule.pending, (state, action) => {
        state.status = LOADING_STATUS;
      })
      .addCase(getSchedule.fulfilled, (state, action) => {
        state.status = SUCCEEDED_STATUS;
        state.data.schedule = action.payload;
      })
      .addCase(getSchedule.rejected, (state, action: any) => {
        state.status = FAILED_STATUS;
        state.error = action.payload.error;
      })
      .addCase(getRecentMatches.pending, (state, action) => {
        state.status = LOADING_STATUS;
      })
      .addCase(getRecentMatches.fulfilled, (state, action) => {
        state.status = SUCCEEDED_STATUS;
        state.data.latestMatches = action.payload;
      })
      .addCase(getRecentMatches.rejected, (state, action: any) => {
        state.status = FAILED_STATUS;
        state.error = action.payload.error;
      })
      .addCase(updateSchedule.pending, (state, action) => {
        state.status = LOADING_STATUS;
      })
      .addCase(updateSchedule.fulfilled, (state, action) => {
        state.status = SUCCEEDED_STATUS;
        state.data.main.schedules = state.data.main.schedules.map(schedule => schedule._id === action.payload._id ? action.payload : schedule);
      })
      .addCase(updateSchedule.rejected, (state, action: any) => {
        state.status = FAILED_STATUS;
        state.error = action.payload.error;
      })
      .addCase(deleteSchedule.pending, (state, action) => {
        state.status = LOADING_STATUS;
      })
      .addCase(deleteSchedule.fulfilled, (state, action) => {
        state.status = SUCCEEDED_STATUS;
        state.data.main = action.payload;
      })
      .addCase(deleteSchedule.rejected, (state, action: any) => {
        state.status = FAILED_STATUS;
        state.error = action.payload.error;
      })
  }
});

export const { setFilters, clearSchedule, clearFilters, clearError } = schedulesSlice.actions;

export default schedulesSlice.reducer;