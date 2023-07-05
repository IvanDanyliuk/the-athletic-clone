import { createSlice } from '@reduxjs/toolkit';
import { 
  createCompetition, deleteCompetition, getCompetitions, getAllCompetitions, 
  updateCompetition, getCompetition 
} from './asyncActions';
import { ICompetitionsInitialState } from './types';
import { FAILED_STATUS, IDLE_STATUS, LOADING_STATUS, SUCCEEDED_STATUS } from '../../app/constants/common';


const initialState: ICompetitionsInitialState = {
  status: IDLE_STATUS,
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
    clearCompetition: (state) => {
      state.data.competition = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCompetition.pending, (state, action) => {
        state.status = LOADING_STATUS;
      })
      .addCase(createCompetition.fulfilled, (state, action) => {
        state.status = SUCCEEDED_STATUS;
        state.data.main.competitions.push(action.payload);
      })
      .addCase(createCompetition.rejected, (state, action: any) => {
        state.status = FAILED_STATUS;
        state.error = action.payload.error;
      })
      .addCase(getCompetitions.pending, (state, action) => {
        state.status = LOADING_STATUS;
      })
      .addCase(getCompetitions.fulfilled, (state, action) => {
        state.status = SUCCEEDED_STATUS;
        state.data.main = action.payload;
      })
      .addCase(getCompetitions.rejected, (state, action: any) => {
        state.status = FAILED_STATUS;
        state.error = action.payload.error;
      })
      .addCase(getAllCompetitions.pending, (state, action) => {
        state.status = LOADING_STATUS;
      })
      .addCase(getAllCompetitions.fulfilled, (state, action) => {
        state.status = SUCCEEDED_STATUS;
        state.data.main = action.payload;
      })
      .addCase(getAllCompetitions.rejected, (state, action: any) => {
        state.status = FAILED_STATUS;
        state.error = action.payload.error;
      })
      .addCase(getCompetition.pending, (state, action) => {
        state.status = LOADING_STATUS;
      })
      .addCase(getCompetition.fulfilled, (state, action) => {
        state.status = SUCCEEDED_STATUS;
        state.data.competition = action.payload;
      })
      .addCase(getCompetition.rejected, (state, action: any) => {
        state.status = FAILED_STATUS;
        state.error = action.payload.error;
      })
      .addCase(updateCompetition.pending, (state, action) => {
        state.status = LOADING_STATUS;
      })
      .addCase(updateCompetition.fulfilled, (state, action) => {
        state.status = SUCCEEDED_STATUS;
        state.data.main.competitions = state.data.main.competitions.map(competition => competition._id === action.payload._id ? action.payload : competition);
      })
      .addCase(updateCompetition.rejected, (state, action: any) => {
        state.status = FAILED_STATUS;
        state.error = action.payload.error;
      })
      .addCase(deleteCompetition.pending, (state, action) => {
        state.status = LOADING_STATUS;
      })
      .addCase(deleteCompetition.fulfilled, (state, action) => {
        state.status = SUCCEEDED_STATUS;
        state.data.main = action.payload;
      })
      .addCase(deleteCompetition.rejected, (state, action: any) => {
        state.status = FAILED_STATUS;
        state.error = action.payload.error;
      })
  }
});

export const { setFilters, clearFilters, clearCompetition, clearError } = competitionSlice.actions;

export default competitionSlice.reducer;