import { RootState } from '../store';

export const selectUser = (state: RootState) => state.users.user;
export const selectUserError = (state: RootState) => state.users.error;