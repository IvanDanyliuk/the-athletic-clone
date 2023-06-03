import { createSlice } from '@reduxjs/toolkit';
import { createClub, deleteClub, getClub, getClubs, getClubsByCountry, updateClub } from './asyncActions';
import { ICLubsInitialState } from './types';


const initialState: ICLubsInitialState = {
  status: 'idle',
  data: {
    main: {
      clubs: [],
      clubsCount: 0
    },
    club: null
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
    clearClub: (state) => {
      state.data.club = null;
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
        state.data.main.clubs.push(action.payload);
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
        state.data.main = action.payload;
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
      .addCase(getClub.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getClub.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.club = action.payload;
      })
      .addCase(getClub.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(updateClub.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateClub.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.main.clubs = state.data.main.clubs.map(club => club._id === action.payload._id ? action.payload : club);
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
        state.data.main = action.payload;
      })
      .addCase(deleteClub.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
  }
});

export const { setFilters, clearClub, clearFilters, clearError } = clubSlice.actions;

export default clubSlice.reducer;