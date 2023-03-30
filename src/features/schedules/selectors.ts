import { RootState } from '../store';


export const selectAllSchedules = (state: RootState) => state.schedules.data.schedules;
export const selectSchedulesCount = (state: RootState) => state.schedules.data.schedulesCount;
export const selectSchedulesFilters = (state: RootState) => state.schedules.filters;
export const selectSchedulesStatus = (state: RootState) => state.schedules.status;