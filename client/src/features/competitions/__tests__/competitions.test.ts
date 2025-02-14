import { cleanup } from '@testing-library/react';
import { setupCompetitionsErrorHandlers, setupCompetitionsSuccessHandlers } from '../../../app/utils/testing/serverMocks/competitions';
import { createCompetition, deleteCompetition, getAllCompetitions, getCompetition, getCompetitions, updateCompetition } from '../asyncActions';
import { clearCompetition, clearError, clearFilters, setFilters } from '../reducers';
import { store } from '../../store';
import { competitionToUpdate, competitionsStateSuccessMock, newCompetition } from '../../../app/utils/testing/testDataMocks/competitions';


describe('Redux tests: competitiona_success cases', () => {
  beforeEach(() => {
    setupCompetitionsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should create new competition by dispatching the createCompetitions async action', async () => {
    let state = store.getState().competitions;
    await store.dispatch(createCompetition(newCompetition));
    state = store.getState().competitions;
    expect(state.data.main.competitions[0].fullName).toBe(newCompetition.fullName);
  });

  test('should get competitions by dispatching the getCompetitions async action', async () => {
    let state = store.getState().competitions;
    await store.dispatch(getCompetitions({ page: 1, itemsPerPage: 10, filterData: null, sortData: null }));
    state = store.getState().competitions;
    expect(state.data.main.competitions).toHaveLength(competitionsStateSuccessMock.data.main.competitions.length);
  });

  test('should get all competitions by dispatching the getCompetitions async action', async () => {
    let state = store.getState().competitions;
    await store.dispatch(getAllCompetitions());
    state = store.getState().competitions;
    expect(state.data.main.competitions).toHaveLength(competitionsStateSuccessMock.data.main.competitions.length);
  });

  test('should get competition by passing its id and dispatching the getCompetition async action', async () => {
    let state = store.getState().competitions;
    await store.dispatch(getCompetition(competitionToUpdate._id));
    state = store.getState().competitions;
    expect(state.data.competition?._id).toBe(competitionToUpdate._id);
  });

  test('should update competition data by dispatching the updateCompetition async action', async () => {
    let state = store.getState().competitions;
    await store.dispatch(updateCompetition(competitionToUpdate));
    state = store.getState().competitions;
    expect(state.data.competition?.fullName).toBe(competitionToUpdate.fullName);
  });

  test('should delete competition by dispatching the deleteCompetition async action', async () => {
    let state = store.getState().competitions;
    await store.dispatch(deleteCompetition({ id: competitionToUpdate._id, page: 0, itemsPerPage: 10 }));
    state = store.getState().competitions;
    expect(state.data.main.competitions).toHaveLength(state.data.main.competitions.length);
  });

  test('should clear the competition field of the state by dispatching the clearCompetition action', () => {
    let state = store.getState().competitions;
    store.dispatch(clearCompetition());
    state = store.getState().competitions;
    expect(state.data.competition).toBeNull();
  });

  test('should clear the filters field of the state by dispatching the clearFilters action', () => {
    let state = store.getState().competitions;
    store.dispatch(clearFilters());
    state = store.getState().competitions;
    expect(state.filters).toBeNull();
  });

  test('should set the filters field of the state by dispatching the setFilters action', () => {
    let state = store.getState().competitions;
    store.dispatch(setFilters({ country: 'United Kingdom' }));
    state = store.getState().competitions;
    expect(state.filters?.country).toBe('United Kingdom');
  });
});

describe('Redux tests: competitiona_error cases', () => {
  beforeEach(() => {
    setupCompetitionsErrorHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should not create new competition by dispatching the createCompetition async action', async () => {
    let state = store.getState().competitions;
    await store.dispatch(createCompetition(newCompetition));
    state = store.getState().competitions;
    expect(state.error).toBe('Create Competition Error');
  });

  test('should not get competitions by dispatching the getCompetitions async action', async () => {
    let state = store.getState().competitions;
    await store.dispatch(getCompetitions({ page: 1, itemsPerPage: 10, filterData: null, sortData: null }));
    state = store.getState().competitions;
    expect(state.error).toBe('Get Competitions Error');
  });

  test('should not get all competitions by dispatching the getAllCompetitions async action', async () => {
    let state = store.getState().competitions;
    await store.dispatch(getAllCompetitions());
    state = store.getState().competitions;
    expect(state.error).toBe('Get All Competitions Error');
  });

  test('should not get competition by passing its id and dispatching the getCompetition async action', async () => {
    let state = store.getState().competitions;
    await store.dispatch(getCompetition(competitionToUpdate._id));
    state = store.getState().competitions;
    expect(state.error).toBe('Get Competition Error');
  });

  test('should not update competition data by dispatching the updateCompetition async action', async () => {
    let state = store.getState().competitions;
    await store.dispatch(updateCompetition(competitionToUpdate));
    state = store.getState().competitions;
    expect(state.error).toBe('Update Competition Error');
  });

  test('should not delete competition by dispatching the deleteCompetition async action', async () => {
    let state = store.getState().competitions;
    await store.dispatch(deleteCompetition({ id: competitionToUpdate._id, page: 0, itemsPerPage: 10 }));
    state = store.getState().competitions;
    expect(state.error).toBe('Delete Competition Error');
  });
  
  test('should clear the error field of the state by dispatching the clearError action', () => {
    let state = store.getState().competitions;
    store.dispatch(clearError());
    state = store.getState().competitions;
    expect(state.error).toBeNull();
  });
});