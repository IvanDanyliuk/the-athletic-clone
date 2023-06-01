import { RootState } from '../store';


export const selectAllCompetitions = (state: RootState) => state.competitions.data.main.competitions;
export const selectCompetitionsCount = (state: RootState) => state.competitions.data.main.competitionsCount;
export const selectCompetition = (state:RootState) => state.competitions.data.competition;
export const selectCompetitionsFilters = (state: RootState) => state.competitions.filters;
export const selectCompetitionsStatus = (state: RootState) => state.competitions.status;
export const selectCompetitionsError = (state: RootState) => state.competitions.error;