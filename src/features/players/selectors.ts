import { RootState } from "../store";


export const selectAllPlayers = (state: RootState) => state.players.data.main.players;
export const selectPlayersCount = (state: RootState) => state.players.data.main.playersCount;
export const selectPlayer = (state: RootState) => state.players.data.player;
export const selectPlayersStatus = (state: RootState) => state.players.status;
export const selectPlayersError = (state: RootState) => state.players.error;
export const selectPlayersFilters = (state: RootState) => state.players.filters;