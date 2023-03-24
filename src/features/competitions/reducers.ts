import { createSlice } from '@reduxjs/toolkit';
import { createCompetition, deleteCompetition, getAllCompetitions } from './asyncActions';
import { ICompetitionsInitialState } from './types';


const initialState: ICompetitionsInitialState = {
  status: 'idle',
  data: {
    competitions: [],
    competitionsCount: 0
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
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCompetition.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createCompetition.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.competitions.push(action.payload);
      })
      .addCase(createCompetition.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(getAllCompetitions.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getAllCompetitions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getAllCompetitions.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(deleteCompetition.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(deleteCompetition.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(deleteCompetition.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
  }
});

const { setFilters, clearFilters } = competitionSlice.actions;

export default competitionSlice.reducer;