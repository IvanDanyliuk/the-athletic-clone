import { RootState } from '../store';


export const selectAllCompetitions = (state: RootState) => state.competitions.data.competitions;
export const selectCompetitionsCount = (state: RootState) => state.competitions.data.competitionsCount;
export const selectCompetitionsFilters = (state: RootState) => state.competitions.filters;
export const selectCompetitionsStatus = (state: RootState) => state.competitions.status;