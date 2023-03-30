import { createSlice } from '@reduxjs/toolkit';
import { createSchedule } from './asyncActions';
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
  }
});

export const { setFilters, clearFilters } = schedulesSlice.actions;

export default schedulesSlice.reducer;