import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './users/reducers';
import materialReducer from './materials/reducers';


const rootReducer = combineReducers({
  users: userReducer,
  materials: materialReducer,
});

export default rootReducer;