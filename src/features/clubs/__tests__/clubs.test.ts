import { cleanup } from '@testing-library/react';
import { setupClubsErrorHandlers, setupClubsSuccessHandlers } from '../../../app/utils/testing/serverMocks/clubs';
import { createClub, deleteClub, getClub, getClubs, getClubsByCountry, updateClub } from '../asyncActions';
import { clearClub, clearError, clearFilters, setFilters } from '../reducers';
import { store } from '../../store';
import { clubToUpdate, clubsStateSuccessMock, newClub } from '../../../app/utils/testing/testDataMocks/clubs';


describe('Redux tests: clubs_success cases', () => {
  beforeEach(() => {
    setupClubsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should create new club by dispatching the createClub async action', async () => {
    let state = store.getState().clubs;
    await store.dispatch(createClub(newClub));
    state = store.getState().clubs;
    expect(state.data.main.clubs[0].fullName).toBe(newClub.fullName);
  });

  test('should get clubs by dispatching the getClubs async action', async () => {
    let state = store.getState().clubs;
    await store.dispatch(getClubs({ page: 1, itemsPerPage: 10, filterData: null, sortData: null }));
    state = store.getState().clubs;
    expect(state.data.main.clubs).toHaveLength(clubsStateSuccessMock.data.main.clubs.length);
  });

  test('should get clubs by country by dispatching the getClubsByCountry async action', async () => {
    let state = store.getState().clubs;
    await store.dispatch(getClubsByCountry('United Kingdom'));
    state = store.getState().clubs;
    expect(state.data.main.clubs).toHaveLength(clubsStateSuccessMock.data.main.clubs.length);
  });

  test('should get club by passing its id and dispatching the getClub async action', async () => {
    let state = store.getState().clubs;
    await store.dispatch(getClub(clubToUpdate._id));
    state = store.getState().clubs;
    expect(state.data.club?._id).toBe(clubToUpdate._id);
  });

  test('should update club data by dispatching the updateClub async action', async () => {
    let state = store.getState().clubs;
    await store.dispatch(updateClub(clubToUpdate));
    state = store.getState().clubs;
    expect(state.data.club?.fullName).toBe(clubToUpdate.fullName);
  });

  test('should delete club by dispatching the deleteClub async action', async () => {
    let state = store.getState().clubs;
    await store.dispatch(deleteClub({ id: clubToUpdate._id, page: 0, itemsPerPage: 10 }));
    state = store.getState().clubs;
    expect(state.data.main.clubs).toHaveLength(state.data.main.clubs.length);
  });

  test('should clear the club field of the state by dispatching the clearClub action', () => {
    let state = store.getState().clubs;
    store.dispatch(clearClub());
    state = store.getState().clubs;
    expect(state.data.club).toBeNull();
  });

  test('should clear the error field of the state by dispatching the clearClub action', () => {
    let state = store.getState().clubs;
    store.dispatch(clearError());
    state = store.getState().clubs;
    expect(state.error).toBeNull();
  });

  test('should clear the filters field of the state by dispatching the clearClub action', () => {
    let state = store.getState().clubs;
    store.dispatch(clearFilters());
    state = store.getState().clubs;
    expect(state.filters).toBeNull();
  });

  test('should set the filters field of the state by dispatching the setFilters action', () => {
    let state = store.getState().clubs;
    store.dispatch(setFilters({ competition: 'Premier League', country: 'United Kingdom' }));
    state = store.getState().clubs;
    expect(state.filters?.competition).toBe('Premier League');
  })
});

describe('Redux tests: clubs_error cases', () => {
  beforeEach(() => {
    setupClubsErrorHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should not create new club by dispatching the createClub async action', async () => {
    let state = store.getState().clubs;
    await store.dispatch(createClub(newClub));
    state = store.getState().clubs;
    expect(state.status).toBe('failed');
  });

  test('should not get clubs by dispatching the getClubs async action', async () => {
    let state = store.getState().clubs;
    await store.dispatch(getClubs({ page: 1, itemsPerPage: 10, filterData: null, sortData: null }));
    state = store.getState().clubs;
    expect(state.status).toBe('failed');
  });

  test('should not get clubs by country by dispatching the getClubsByCountry async action', async () => {
    let state = store.getState().clubs;
    await store.dispatch(getClubsByCountry('United Kingdom'));
    state = store.getState().clubs;
    expect(state.status).toBe('failed');
  });

  test('should not get club by passing its id and dispatching the getClub async action', async () => {
    let state = store.getState().clubs;
    await store.dispatch(getClub(clubToUpdate._id));
    state = store.getState().clubs;
    expect(state.status).toBe('failed');
  });

  test('should not update club data by dispatching the updateClub async action', async () => {
    let state = store.getState().clubs;
    await store.dispatch(updateClub(clubToUpdate));
    state = store.getState().clubs;
    expect(state.status).toBe('failed');
  });

  test('should not delete club by dispatching the deleteClub async action', async () => {
    let state = store.getState().clubs;
    await store.dispatch(deleteClub({ id: clubToUpdate._id, page: 0, itemsPerPage: 10 }));
    state = store.getState().clubs;
    expect(state.status).toBe('failed');
  });
});