import { cleanup } from '@testing-library/react';
import { setupPlayersErrorHandlers, setupPlayersSuccessHandlers } from '../../../app/utils/testing/serverMocks/players';
import { createPlayer, deletePlayer, getPlayer, getPlayers, updatePlayer } from '../asyncActions';
import { clearError, clearFilters, clearPlayer, setFilters } from '../reducers';
import { store } from '../../store';
import { newPlayer, playerToUpdate, playersStateSuccessMock } from '../../../app/utils/testing/testDataMocks/players';


describe('Redux tests: players_success cases', () => {
  beforeEach(() => {
    setupPlayersSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should create new player by dispatching the createPlayer async action', async () => {
    let state = store.getState().players;
    await store.dispatch(createPlayer(newPlayer));
    state = store.getState().players;
    expect(state.data.main.players[0].lastName).toBe(newPlayer.lastName);
  });

  test('should delete player by dispatching the deletePlayer async action', async () => {
    let state = store.getState().players;
    await store.dispatch(getPlayers({ page: 0, itemsPerPage: 10 }));
    await store.dispatch(deletePlayer(playerToUpdate._id));
    state = store.getState().players;
    expect(state.data.main.players).toHaveLength(playersStateSuccessMock.data.main.players.length - 1);
  });

  test('should get player data by dispatching the getPlayer async action', async () => {
    let state = store.getState().players;
    await store.dispatch(getPlayer(playerToUpdate._id));
    state = store.getState().players;
    expect(state.data.player?.lastName).toBe(playerToUpdate.lastName);
  });

  test('should get players by dispatching the getPlayers async action', async () => {
    let state = store.getState().players;
    await store.dispatch(getPlayers({ page: 0, itemsPerPage: 10, filterData: null, sortData: null }));
    state = store.getState().players;
    expect(state.data.main.players).toHaveLength(playersStateSuccessMock.data.main.players.length);
  });

  test('should update player by dispatching the updatePlayer async action', async () => {
    let state = store.getState().players;
    await store.dispatch(updatePlayer(playerToUpdate));
    state = store.getState().players;
    expect(state.data.main.players[0].lastName).toBe(newPlayer.lastName);
  });

  test('should set filters data by dispatching the setFilters action', () => {
    let state = store.getState().players;
    store.dispatch(setFilters({ club: 'Arsenal' }));
    state = store.getState().players;
    expect(state.filters).not.toBeNull();
  });

  test('should clear filters data by dispatching the clearFilters action', () => {
    let state = store.getState().players;
    store.dispatch(clearFilters());
    state = store.getState().players;
    expect(state.filters).toBeNull();
  });
  
  test('should clear player field of the state by dispatching the clearPlayer action', () => {
    let state = store.getState().players;
    store.dispatch(clearPlayer());
    state = store.getState().players;
    expect(state.data.player).toBeNull();
  });
});

describe('Redux tests: players_error cases', () => {
  beforeEach(() => {
    setupPlayersErrorHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should not create new player by dispatching the createPlayer async action', async () => {
    let state = store.getState().players;
    await store.dispatch(createPlayer(newPlayer));
    state = store.getState().players;
    expect(state.error).toBe('Create Player Error');
  });

  test('should not delete player by dispatching the deletePlayer async action', async () => {
    let state = store.getState().players;
    await store.dispatch(deletePlayer(playerToUpdate._id));
    state = store.getState().players;
    expect(state.error).toBe('Delete Player Error');
  });

  test('should not get player data by dispatching the getPlayer async action', async () => {
    let state = store.getState().players;
    await store.dispatch(getPlayer(playerToUpdate._id));
    state = store.getState().players;
    expect(state.error).toBe('Get Player Error');
  });

  test('should not get players by dispatching the getPlayers async action', async () => {
    let state = store.getState().players;
    await store.dispatch(getPlayers({ page: 0, itemsPerPage: 10, filterData: null, sortData: null }));
    state = store.getState().players;
    expect(state.error).toBe('Get Players Error');
  });

  test('should not update player by dispatching the updatePlayer async action', async () => {
    let state = store.getState().players;
    await store.dispatch(updatePlayer(playerToUpdate));
    state = store.getState().players;
    expect(state.error).toBe('Update Player Error');
  });

  test('should clear the error value by dipatching the clearError action', () => {
    let state = store.getState().players;
    store.dispatch(clearError());
    state = store.getState().players;
    expect(state.error).toBeNull();
  });
});