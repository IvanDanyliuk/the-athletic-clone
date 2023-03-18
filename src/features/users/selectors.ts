import { RootState } from '../store';

export const selectUser = (state: RootState) => state.users.user;
export const selectAllUsers = (state: RootState) => state.users.data.users;
export const selectAllUsersCount = (state: RootState) => state.users.data.usersCount;
export const selectUserStatus = (state: RootState) => state.users.status;
export const selectUserError = (state: RootState) => state.users.error;
export const selectUserFilters = (state: RootState) => state.users.filters;