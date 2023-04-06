
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

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>,
  store?: any
};


export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {
      users: {
        status: 'success',
        data: {
          users: [],
          usersCount: 0
        },
        countries: [],
        filters: null,
        user: null,
        error: null
      },
      materials: {
        status: 'succeeded',
        data: {
          materials: [],
          materialsCount: 0
        },
        filters: null,
        error: null
      },
      clubs: {
        status: 'succeeded',
        data: {
          clubs: [],
          clubsCount: 0
        },
        clubsByCountry: [],
        filters: null,
        error: null
      },
      competitions: {
        status: 'succeeded',
        data: {
          competitions: [],
          competitionsCount: 0
        },
        filters: null,
        error: null
      },
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
          schedules: [],
          schedulesCount: 0
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
      return <MemoryRouter>
        <Provider store={store}>
          {children}
        </Provider>
      </MemoryRouter>
    };
  
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
  };
  