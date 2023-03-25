import { createSlice } from '@reduxjs/toolkit';
import { createPlayer } from './asyncActions';
import { IPlayerInitialState } from './types';


const initialState: IPlayerInitialState = {
  status: 'idle',
  data: {
    players: [],
    playersCount: 0
  },
  filters: null,
  error: null
};

const playerSlice = createSlice({
  name: 'players',
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
      .addCase(createPlayer.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createPlayer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.players.push(action.payload);
      })
      .addCase(createPlayer.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
  }
});

export const { setFilters, clearFilters } = playerSlice.actions;

export default playerSlice.reducer;