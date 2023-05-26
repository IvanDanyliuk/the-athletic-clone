
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { RenderOptions, render } from '@testing-library/react';
import { RootState } from '../../../features/store';
import userReducer from '../../../features/users/reducers';
import materialReducer from '../../../features/materials/reducers';
import clubsReducer from '../../../features/clubs/reducers';
import competitionsReducer from '../../../features/competitions/reducers';
import playersReducer from '../../../features/players/reducers';
import schedulesReducer from '../../../features/schedules/reducers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { clubsStateSuccessMock } from './testDataMocks/clubs';
import { materialsStateSuccessMock } from './testDataMocks/materials';
import { usersStateSuccessMock } from './testDataMocks/users';
import { competitionsStateSuccessMock } from './testDataMocks/competitions';
import ScheduleContext, { ScheduleContextType } from '../../context/scheduleContext';
import { addMatchMock, addMatchweekMock, addScheduleTitleMock, deleteMatchMock, deleteMatchweekMock, newSchedule } from './testDataMocks/schedules';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>,
  store?: any
};


export const renderWithProvidersForSchedules = (
  ui: React.ReactElement,
  {
    preloadedState = {
      users: usersStateSuccessMock,
      materials: materialsStateSuccessMock,
      clubs: clubsStateSuccessMock,
      competitions: competitionsStateSuccessMock,
      players: {
        status: 'succeeded',
        data: {
          players: [],
          playersCount: 0
        },
        filters: null,
        error: null
      },
      schedules: {
        status: 'succeeded',
        data: {
          main: {
            schedules: [],
            schedulesCount: 0
          },
          schedule: null,
          latestMatches: []
        },
        filters: null,
        error: null
      },
    },
    store = configureStore({
      reducer: combineReducers({
        users: userReducer,
        materials: materialReducer,
        clubs: clubsReducer,
        competitions: competitionsReducer,
        players: playersReducer,
        schedules: schedulesReducer,
      }),
      preloadedState
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
  ) => {
    const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
      const value: ScheduleContextType = {
        schedule: newSchedule,
        isUpdatingMode: false,
        addScheduleTitle: addScheduleTitleMock,
        addMatchweek: addMatchweekMock, 
        addMatch: addMatchMock,
        deleteMatchweek: deleteMatchweekMock,
        deleteMatch: deleteMatchMock,
      };

      return <MemoryRouter>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Provider store={store}>
            <ScheduleContext.Provider value={value}>
              {children}
            </ScheduleContext.Provider>
          </Provider>
        </LocalizationProvider>
      </MemoryRouter>
    };
  
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
  };
  