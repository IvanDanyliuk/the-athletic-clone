import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './users/reducers';
import materialReducer from './materials/reducers';
import clubsReducer from './clubs/reducers';
import competitionsReducer from './competitions/reducers';


const rootReducer = combineReducers({
  users: userReducer,
  materials: materialReducer,
  clubs: clubsReducer,
  competitions: competitionsReducer,
});

export default rootReducer;