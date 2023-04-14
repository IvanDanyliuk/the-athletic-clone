import { createSlice } from '@reduxjs/toolkit';
import { createClub, deleteClub, getClubs, getClubsByCountry, updateClub } from './asyncActions';
import { ICLubsInitialState } from './types';


const initialState: ICLubsInitialState = {
  status: 'idle',
  data: {
    clubs: [],
    clubsCount: 0
  },
  filters: null,
  clubsByCountry: [],
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
    },
    clearError: (state) => {
      state.error = null;
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
      .addCase(getClubs.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getClubs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getClubs.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(getClubsByCountry.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getClubsByCountry.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.clubsByCountry = action.payload;
      })
      .addCase(getClubsByCountry.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(updateClub.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateClub.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.clubs = state.data.clubs.map(club => club._id === action.payload._id ? action.payload : club);
      })
      .addCase(updateClub.rejected, (state, action: any) => {
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

export const { setFilters, clearFilters, clearError } = clubSlice.actions;

export default clubSlice.reducer;