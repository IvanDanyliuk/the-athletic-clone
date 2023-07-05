import { createSlice } from '@reduxjs/toolkit';
import { createPlayer, deletePlayer, getPlayer, getPlayers, updatePlayer } from './asyncActions';
import { IPlayerInitialState } from './types';
import { FAILED_STATUS, IDLE_STATUS, LOADING_STATUS, SUCCEEDED_STATUS } from '../../app/constants/common';


const initialState: IPlayerInitialState = {
  status: IDLE_STATUS,
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
    clearPlayer: (state) => {
      state.data.player = null;
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
        state.status = LOADING_STATUS;
      })
      .addCase(createPlayer.fulfilled, (state, action) => {
        state.status = SUCCEEDED_STATUS;
        state.data.main.players.push(action.payload);
      })
      .addCase(createPlayer.rejected, (state, action: any) => {
        state.status = FAILED_STATUS;
        state.error = action.payload.error;
      })
      .addCase(getPlayers.pending, (state, action) => {
        state.status = LOADING_STATUS;
      })
      .addCase(getPlayers.fulfilled, (state, action) => {
        state.status = SUCCEEDED_STATUS;
        state.data.main = action.payload;
      })
      .addCase(getPlayers.rejected, (state, action: any) => {
        state.status = FAILED_STATUS;
        state.error = action.payload.error;
      })
      .addCase(getPlayer.pending, (state, action) => {
        state.status = LOADING_STATUS;
      })
      .addCase(getPlayer.fulfilled, (state, action) => {
        state.status = SUCCEEDED_STATUS;
        state.data.player = action.payload;
      })
      .addCase(getPlayer.rejected, (state, action: any) => {
        state.status = FAILED_STATUS;
        state.error = action.payload.error;
      })
      .addCase(updatePlayer.pending, (state, action) => {
        state.status = LOADING_STATUS;
      })
      .addCase(updatePlayer.fulfilled, (state, action) => {
        state.status = SUCCEEDED_STATUS;
        state.data.main.players = state.data.main.players.map(player => player._id === action.payload._id ? action.payload : player);
      })
      .addCase(updatePlayer.rejected, (state, action: any) => {
        state.status = FAILED_STATUS;
        state.error = action.payload.error;
      })
      .addCase(deletePlayer.pending, (state, action) => {
        state.status = LOADING_STATUS;
      })
      .addCase(deletePlayer.fulfilled, (state, action) => {
        state.status = SUCCEEDED_STATUS;
        state.data.main = action.payload;
      })
      .addCase(deletePlayer.rejected, (state, action: any) => {
        state.status = FAILED_STATUS;
        state.error = action.payload.error;
      })
  }
});

export const { setFilters, clearPlayer, clearFilters, clearError } = playerSlice.actions;

export default playerSlice.reducer;