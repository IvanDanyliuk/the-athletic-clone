import { createSlice } from '@reduxjs/toolkit';
import { createClub, deleteClub, getAllClubs } from './asyncActions';
import { ICLubsInitialState } from './types';


const initialState: ICLubsInitialState = {
  status: 'idle',
  data: {
    clubs: [],
    clubsCount: 0
  },
  filters: null,
  error: null
};


const clubSlice = createSlice({
  name: 'clubs',
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
      .addCase(createClub.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createClub.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.clubs.push(action.payload);
      })
      .addCase(createClub.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(getAllClubs.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getAllClubs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getAllClubs.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(deleteClub.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(deleteClub.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(deleteClub.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
  }
});

export const { setFilters, clearFilters } = clubSlice.actions;

export default clubSlice.reducer;