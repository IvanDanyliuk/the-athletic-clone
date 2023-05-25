import { createSlice } from '@reduxjs/toolkit';
import { createCompetition, deleteCompetition, getCompetitions, getAllCompetitions, updateCompetition } from './asyncActions';
import { ICompetitionsInitialState } from './types';


const initialState: ICompetitionsInitialState = {
  status: 'idle',
  data: {
    main: {
      competitions: [],
      competitionsCount: 0
    },
    competition: null
  },
  filters: null,
  error: null
}

const competitionSlice = createSlice({
  name: 'competitions',
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
      .addCase(createCompetition.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createCompetition.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.main.competitions.push(action.payload);
      })
      .addCase(createCompetition.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(getCompetitions.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getCompetitions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.main = action.payload;
      })
      .addCase(getCompetitions.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(getAllCompetitions.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getAllCompetitions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.main = action.payload;
      })
      .addCase(getAllCompetitions.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(updateCompetition.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateCompetition.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.main.competitions = state.data.main.competitions.map(competition => competition._id === action.payload._id ? action.payload : competition);
      })
      .addCase(updateCompetition.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(deleteCompetition.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(deleteCompetition.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.main = action.payload;
      })
      .addCase(deleteCompetition.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
  }
});

export const { setFilters, clearFilters, clearError } = competitionSlice.actions;

export default competitionSlice.reducer;