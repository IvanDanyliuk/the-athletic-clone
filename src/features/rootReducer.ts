import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './users/reducers';
import materialReducer from './materials/reducers';
import clubsReducer from './clubs/reducers';


const rootReducer = combineReducers({
  users: userReducer,
  materials: materialReducer,
  clubs: clubsReducer,
});

export default rootReducer;