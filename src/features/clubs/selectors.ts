import { RootState } from "../store";


export const selectAllClubs = (state: RootState) => state.clubs.data.clubs;
export const selectClubsCount = (state: RootState) => state.clubs.data.clubsCount;
export const selectClubsStatus = (state: RootState) => state.clubs.status;
export const selectFilters = (state: RootState) => state.clubs.filters;