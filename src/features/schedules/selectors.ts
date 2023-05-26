import { RootState } from '../store';


export const selectAllSchedules = (state: RootState) => state.schedules.data.main.schedules;
export const selectSchedulesCount = (state: RootState) => state.schedules.data.main.schedulesCount;
export const selectSchedule = (state: RootState) => state.schedules.data.schedule;
export const selectLatestMatches = (state: RootState) => state.schedules.data.latestMatches;
export const selectSchedulesFilters = (state: RootState) => state.schedules.filters;
export const selectSchedulesStatus = (state: RootState) => state.schedules.status;
export const selectSchedulesError = (state: RootState) => state.schedules.error;