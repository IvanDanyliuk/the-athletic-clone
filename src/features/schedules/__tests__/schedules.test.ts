import { cleanup } from '@testing-library/react';
import { setupSchedulesErrorHandlers, setupSchedulesSuccessHandlers } from '../../../app/utils/testing/serverMocks/schedules';
import { createSchedule, deleteSchedule, getRecentMatches, getSchedule, getSchedules, getSchedulesByClub, updateSchedule } from '../asyncActions';
import { clearError, clearFilters, clearSchedule, setFilters } from '../reducers';
import { store } from '../../store';
import { latestMatechesMock, newSchedule, scheduleToUpdate, schedulesStateSuccessMock } from '../../../app/utils/testing/testDataMocks/schedules';
import { clubToUpdate } from '../../../app/utils/testing/testDataMocks/clubs';
import { competitionToUpdate } from '../../../app/utils/testing/testDataMocks/competitions';


describe('Redux tests: schedules_success cases', () => {
  beforeEach(() => {
    setupSchedulesSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should create new schedule by dispatching the createSchedule action', async () => {
    let state = store.getState().schedules;
    await store.dispatch(createSchedule(newSchedule));
    state = store.getState().schedules;
    expect(state.data.main.schedules[0].season).toBe(newSchedule.season);
  });

  test('should delete schedule by dispatching the deleteSchedule action', async () => {
    let state = store.getState().schedules;
    await store.dispatch(deleteSchedule({ id: scheduleToUpdate._id!, page: 0, itemsPerPage: 10 }));
    state = store.getState().schedules;
    expect(state.data.main.schedules).toHaveLength(schedulesStateSuccessMock.data.main.schedules.length);
  });

  test('should get recent matches by dispatching the getRecentMatches action', async () => {
    let state = store.getState().schedules;
    await store.dispatch(getRecentMatches('2022/2023'));
    state = store.getState().schedules;
    expect(state.data.latestMatches).toHaveLength(latestMatechesMock.length);
  });

  test('should get schedule by dispatching the getSchedule action', async () => {
    let state = store.getState().schedules;
    await store.dispatch(getSchedule({ season: scheduleToUpdate.season, leagueId: competitionToUpdate._id }));
    state = store.getState().schedules;
    expect(state.data.schedule?.season).toBe(scheduleToUpdate.season!);
  });

  test('should get schedules by dispatching the getSchedules action', async () => {
    let state = store.getState().schedules;
    await store.dispatch(getSchedules({ page: 0, itemsPerPage: 10, filterData: null, sortData: null }));
    state = store.getState().schedules;
    expect(state.data.main.schedules).toHaveLength(schedulesStateSuccessMock.data.main.schedules.length);
  });

  test('should get schedules by club by dispatching the getSchedulesByClub action', async () => {
    let state = store.getState().schedules;
    await store.dispatch(getSchedulesByClub({ season: '2022/2023', clubId: clubToUpdate._id }));
    state = store.getState().schedules;
    expect(state.data.main.schedules).toHaveLength(schedulesStateSuccessMock.data.main.schedules.length);
  });

  test('should update schedule by dispatching the updateSchedule action', async () => {
    let state = store.getState().schedules;
    await store.dispatch(updateSchedule(scheduleToUpdate));
    state = store.getState().schedules;
    expect(state.data.schedule?.season!).toBe(scheduleToUpdate.season);
  });

  test('should clear schedule field of the state by dispatching the clearSchedule action', () => {
    let state = store.getState().schedules;
    store.dispatch(clearSchedule());
    state = store.getState().schedules;
    expect(state.data.schedule).toBeNull();
  });

  test('should set schedule filters by dispatching the setFilters action', () => {
    let state = store.getState().schedules;
    store.dispatch(setFilters({ season: '2022/2023' }));
    state = store.getState().schedules;
    expect(state.filters).not.toBeNull();
  });

  test('should clear filters field of the state by dispatching the clearFilters action', () => {
    let state = store.getState().schedules;
    store.dispatch(clearFilters());
    state = store.getState().schedules;
    expect(state.filters).toBeNull();
  });
});

describe('Redux tests: schedules_error cases', () => {
  beforeEach(() => {
    setupSchedulesErrorHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should create new schedule by dispatching the createSchedule action', async () => {
    let state = store.getState().schedules;
    await store.dispatch(createSchedule(newSchedule));
    state = store.getState().schedules;
    expect(state.error).toBe('Create Schedule Error');
  });

  test('should delete schedule by dispatching the deleteSchedule action', async () => {
    let state = store.getState().schedules;
    await store.dispatch(deleteSchedule({ id: scheduleToUpdate._id!, page: 0, itemsPerPage: 10 }));
    state = store.getState().schedules;
    expect(state.error).toBe('Delete Schedule Error');
  });

  test('should get recent matches by dispatching the getRecentMatches action', async () => {
    let state = store.getState().schedules;
    await store.dispatch(getRecentMatches('2022/2023'));
    state = store.getState().schedules;
    expect(state.error).toBe('Get Recent Matches Error');
  });

  test('should get schedule by dispatching the getSchedule action', async () => {
    let state = store.getState().schedules;
    await store.dispatch(getSchedule({ season: scheduleToUpdate.season, leagueId: scheduleToUpdate.competition }));
    state = store.getState().schedules;
    expect(state.error).toBe('Get Schedule Error');
  });

  test('should get schedules by dispatching the getSchedules action', async () => {
    let state = store.getState().schedules;
    await store.dispatch(getSchedules({ page: 0, itemsPerPage: 10, filterData: null, sortData: null }));
    state = store.getState().schedules;
    expect(state.error).toBe('Get Schedules Error');
  });

  test('should get schedules by club by dispatching the getSchedulesByClub action', async () => {
    let state = store.getState().schedules;
    await store.dispatch(getSchedulesByClub({ season: '2022/2023', clubId: clubToUpdate._id }));
    state = store.getState().schedules;
    expect(state.error).toBe('Get Schedules By Club Error');
  });

  test('should updateschedule by dispatching the updateSchedule action', async () => {
    let state = store.getState().schedules;
    await store.dispatch(updateSchedule(scheduleToUpdate));
    state = store.getState().schedules;
    expect(state.error).toBe('Update Schedule Error');
  });

  test('should clear error by dispatching the clearError action', () => {
    let state = store.getState().schedules;
    store.dispatch(clearError());
    state = store.getState().schedules;
    expect(state.error).toBeNull();
  });
});