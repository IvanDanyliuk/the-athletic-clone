import { 
  createUser, deleteUser, getAuthenticatedUser, getUsers, getUsersLocations, 
  login, logout, signup, updatePassword, updateUser 
} from '../asyncActions';
import { clearError, clearFilters, setFilters } from '../reducers';
import { store } from '../../store';
import { setupUsersErrorHandlers, setupUsersSuccessHandlers } from '../../../app/utils/testing/serverMocks/users';
import { cleanup } from '@testing-library/react';
import { newUser, userToUpdate, usersStateSuccessMock } from '../../../app/utils/testing/testDataMocks/users';


describe('Redux tests: users_success cases', () => {
  beforeEach(() => {
    setupUsersSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should create new user by dispatching the createUser async action', async () => {
    let state = store.getState().users;
    await store.dispatch(createUser(newUser));
    state = store.getState().users;
    expect(state.data.users).toHaveLength(1);
  });

  test('should delete existing user by dispatching the deleteUser async action', async () => {
    let state = store.getState().users;
    await store.dispatch(deleteUser({ id: userToUpdate._id!, page: 0, itemsPerPage: 10 }));
    state = store.getState().users;
    expect(state.data.users).toHaveLength(usersStateSuccessMock.data.users.length);
  });

  test('should get authenticated user by dispatching the getAuthenticatedUser async action', async () => {
    let state = store.getState().users;
    await store.dispatch(getAuthenticatedUser());
    state = store.getState().users;
    expect(state.user?.lastName).toBe(usersStateSuccessMock.user?.lastName);
  });

  test('should get users by dispatching the getUsers async action', async () => {
    let state = store.getState().users;
    await store.dispatch(getUsers({ page: 0, itemsPerPage: 10, filterData: null, sortData: null }));
    state = store.getState().users;
    expect(state.data.users).toHaveLength(usersStateSuccessMock.data.users.length);
  });

  test('should get user locations by dispatching the getUsersLocations async action', async () => {
    let state = store.getState().users;
    await store.dispatch(getUsersLocations());
    state = store.getState().users;
    expect(state.countries).toHaveLength(usersStateSuccessMock.countries.length);
  });

  test('should login by dispatching the login async action', async () => {
    let state = store.getState().users;
    await store.dispatch(login({ email: userToUpdate.email, password: userToUpdate.password }));
    state = store.getState().users;
    expect(state.user).not.toBeNull();
  });

  test('should logout by dispatching the logout async action', async () => {
    let state = store.getState().users;
    await store.dispatch(logout());
    state = store.getState().users;
    expect(state.user).toBeNull();
  });

  test('should signup by dispatching the signup async action', async () => {
    let state = store.getState().users;
    await store.dispatch(signup(newUser));
    state = store.getState().users;
    expect(state.user?.lastName).toBe(newUser.lastName);
  });

  test('should update user password by dispatching the updatePassword async action', async () => {
    let state = store.getState().users;
    await store.dispatch(updatePassword({ id: userToUpdate._id!, currPassword: userToUpdate.password, newPassword: userToUpdate.password }));
    state = store.getState().users;
    expect(state.user?.password).toBe(userToUpdate.password);
  });

  test('should update user data by dispatching the updateUser async action', async () => {
    let state = store.getState().users;
    await store.dispatch(updateUser(userToUpdate));
    state = store.getState().users;
    expect(state.user?.lastName).toBe(userToUpdate.lastName);
  });

  test('should set filters by dispatching the setFilters action', () => {
    let state = store.getState().users;
    store.dispatch(setFilters({ role: 'admin' }));
    state = store.getState().users;
    expect(state.filters).not.toBeNull();
  });

  test('should clear filters by dispatching the clearFilters action', () => {
    let state = store.getState().users;
    store.dispatch(clearFilters());
    state = store.getState().users;
    expect(state.filters).toBeNull();
  });
});

describe('Redux tests: users_error cases', () => {
  beforeEach(() => {
    setupUsersErrorHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should create new user by dispatching the createUser async action', async () => {
    let state = store.getState().users;
    await store.dispatch(createUser(newUser));
    state = store.getState().users;
    expect(state.error).toBe('Create New User Error');
  });

  test('should delete existing user by dispatching the deleteUser async action', async () => {
    let state = store.getState().users;
    await store.dispatch(deleteUser({ id: userToUpdate._id!, page: 0, itemsPerPage: 10 }));
    state = store.getState().users;
    expect(state.error).toBe('Delete User Error');
  });

  test('should get authenticated user by dispatching the getAuthenticatedUser async action', async () => {
    let state = store.getState().users;
    await store.dispatch(getAuthenticatedUser());
    state = store.getState().users;
    expect(state.error).toBe('Get Authenticated User Error');
  });

  test('should get users by dispatching the getUsers async action', async () => {
    let state = store.getState().users;
    await store.dispatch(getUsers({ page: 0, itemsPerPage: 10, filterData: null, sortData: null }));
    state = store.getState().users;
    expect(state.error).toBe('Get Users Error');
  });

  test('should get user locations by dispatching the getUsersLocations async action', async () => {
    let state = store.getState().users;
    await store.dispatch(getUsersLocations());
    state = store.getState().users;
    expect(state.error).toBe('Get User Locations Error');
  });

  test('should login by dispatching the login async action', async () => {
    let state = store.getState().users;
    await store.dispatch(login({ email: userToUpdate.email, password: userToUpdate.password }));
    state = store.getState().users;
    expect(state.error).toBe('Login Error');
  });

  test('should logout by dispatching the logout async action', async () => {
    let state = store.getState().users;
    await store.dispatch(logout());
    state = store.getState().users;
    expect(state.error).toBe('Logout Error');
  });

  test('should signup by dispatching the signup async action', async () => {
    let state = store.getState().users;
    await store.dispatch(signup(newUser));
    state = store.getState().users;
    expect(state.error).toBe('Signup Error');
  });

  test('should update user password by dispatching the updatePassword async action', async () => {
    let state = store.getState().users;
    await store.dispatch(updatePassword({ id: userToUpdate._id!, currPassword: userToUpdate.password, newPassword: userToUpdate.password }));
    state = store.getState().users;
    expect(state.error).toBe('Update Password Error');
  });

  test('should update user data by dispatching the updateUser async action', async () => {
    let state = store.getState().users;
    await store.dispatch(updateUser(userToUpdate));
    state = store.getState().users;
    expect(state.error).toBe('Update User Error');
  });

  test('should clear the error field value by dispatching the clearError action', () => {
    let state = store.getState().users;
    store.dispatch(clearError());
    state = store.getState().users;
    expect(state.error).toBeNull();
  });
});