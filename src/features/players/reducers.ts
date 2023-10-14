import { createSlice } from '@reduxjs/toolkit';
import { createPlayer, deletePlayer, getPlayer, getPlayers, updatePlayer } from './asyncActions';
import { IPlayerInitialState } from './types';
import { StateStatus } from '../types';


const initialState: IPlayerInitialState = {
  status: StateStatus.Idle,
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
        state.status = StateStatus.Loading;
      })
      .addCase(createPlayer.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.data.main.players.push(action.payload);
      })
      .addCase(createPlayer.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(getPlayers.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(getPlayers.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.data.main = action.payload;
      })
      .addCase(getPlayers.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(getPlayer.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(getPlayer.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.data.player = action.payload;
      })
      .addCase(getPlayer.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(updatePlayer.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(updatePlayer.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.data.main.players = state.data.main.players.map(player => player._id === action.payload._id ? action.payload : player);
      })
      .addCase(updatePlayer.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
      .addCase(deletePlayer.pending, (state, action) => {
        state.status = StateStatus.Loading;
      })
      .addCase(deletePlayer.fulfilled, (state, action) => {
        state.status = StateStatus.Succeded;
        state.data.main = {
          players: state.data.main.players.filter(player => player._id !== action.payload),
          playersCount: state.data.main.playersCount - 1
        }
      })
      .addCase(deletePlayer.rejected, (state, action: any) => {
        state.status = StateStatus.Failed;
        state.error = action.payload.error;
      })
  }
});

export const { setFilters, clearPlayer, clearFilters, clearError } = playerSlice.actions;

export default playerSlice.reducer;