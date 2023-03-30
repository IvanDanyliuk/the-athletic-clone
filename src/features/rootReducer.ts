import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './users/reducers';
import materialReducer from './materials/reducers';
import clubsReducer from './clubs/reducers';
import competitionsReducer from './competitions/reducers';
import playersReducer from './players/reducers';
import schedulesReducer from './schedules/reducers';


const rootReducer = combineReducers({
  users: userReducer,
  materials: materialReducer,
  clubs: clubsReducer,
  competitions: competitionsReducer,
  players: playersReducer,
  schedules: schedulesReducer,
});

export default rootReducer;