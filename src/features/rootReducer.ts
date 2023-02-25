import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './users/reducers';


const rootReducer = combineReducers({
  users: userReducer,
});

export default rootReducer;