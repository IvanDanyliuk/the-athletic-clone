import { RootState } from "../store";


export const selectAllClubs = (state: RootState) => state.clubs.data.main.clubs;
export const selectClubsCount = (state: RootState) => state.clubs.data.main.clubsCount;
export const selectClub = (state: RootState) => state.clubs.data.club;
export const selectClubsStatus = (state: RootState) => state.clubs.status;
export const selectFilters = (state: RootState) => state.clubs.filters;
export const selectClubsByCountry = (state: RootState) => state.clubs.clubsByCountry;
export const selectClubsError = (state: RootState) => state.clubs.error;