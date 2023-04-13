
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
import { playersStateSuccessMock } from './testDataMocks/players';
import { schedulesStateSuccessMock } from './testDataMocks/schedules';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>,
  store?: any
};


export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {
      users: usersStateSuccessMock,
      materials: materialsStateSuccessMock,
      clubs: clubsStateSuccessMock,
      competitions: competitionsStateSuccessMock,
      players: playersStateSuccessMock,
      schedules: schedulesStateSuccessMock,
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
      return <MemoryRouter>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Provider store={store}>
            {children}
          </Provider>
        </LocalizationProvider>
      </MemoryRouter>
    };
  
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
  };
  