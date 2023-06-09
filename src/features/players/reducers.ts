import { createSlice } from '@reduxjs/toolkit';
import { createPlayer, deletePlayer, getPlayer, getPlayers, updatePlayer } from './asyncActions';
import { IPlayerInitialState } from './types';


const initialState: IPlayerInitialState = {
  status: 'idle',
  data: {
    main: {
      players: [],
      playersCount: 0,
    },
    player: null
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
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPlayer.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createPlayer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.main.players.push(action.payload);
      })
      .addCase(createPlayer.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(getPlayers.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getPlayers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.main = action.payload;
      })
      .addCase(getPlayers.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(getPlayer.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getPlayer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.player = action.payload;
      })
      .addCase(getPlayer.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.rror;
      })
      .addCase(updatePlayer.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updatePlayer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.main.players = state.data.main.players.map(player => player._id === action.payload._id ? action.payload : player);
      })
      .addCase(updatePlayer.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      .addCase(deletePlayer.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(deletePlayer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.main = action.payload;
      })
      .addCase(deletePlayer.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
  }
});

export const { setFilters, clearFilters, clearError } = playerSlice.actions;

export default playerSlice.reducer;