
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

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>,
  store?: any
};


export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {
      users: {
        status: 'succeeded',
        user: {
          _id: '63e8db447a8501b5b2a8428b',
          firstName: 'John',
          lastName: 'Doe',
          email: 'j.doe@gmail.com',
          password: '$2b$10$ExFCWbpvyxkX502OleAlLOXEJczvCv8Hw65GkArU0Ds0IY6LF2.8C',
          userPhotoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
          role: 'admin',
          location: 'United Kingdom',
          organization: 'The Athletic',
          position: 'Website Administrator',
          createdAt: '2023-02-12T12:27:48.640Z',
        },
        data: {
          users: [],
          usersCount: 0
        },
        filters: null,
        countries: [],
        error: null
      },
      materials: {
        status: 'succeeded',
        data: {
          materials: [
            {
              author: {
                name: 'John Doe',
                photoUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/surprised-cat-eric-hacke.jpg',
                organization: 'The Athletic',
                position: 'Website Administrator'
              },
              _id: '642d8710d4be15abd18e94ad',
              type: 'article',
              title: 'aaaaaaaaaaaaaaaaaa',
              content: '<p>sdfsdfsdfsdfsdfsdfsadf</p>',
              image: '',
              status: 'published',
              publicationDate: '2023-04-05T21:00:00.000Z',
              views: 0,
              likes: 0,
              labels: [
                'Premier League',
                'Arsenal'
              ],
              comments: [],
              createdAt: '2023-04-05T14:34:56.462Z',
              updatedAt: '2023-04-05T14:35:57.574Z',
            }
          ],
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
        filters: null,
        clubsByCountry: [
          {
            _id: '6419a26d6e0212a0462b4dd2',
            fullName: 'Arsenal FC',
            commonName: 'Arsenal',
            shortName: 'ARS',
            country: 'United Kingdom',
            clubLogoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679401593/r3ci6rp4umjhlnduimtp.svg',
            stadium: 'Emirates Stadium',
            createdAt: '2023-03-21T12:26:21.895Z',
            updatedAt: '2023-03-21T12:26:21.895Z',
          },
          {
            _id: '6419f57b1f12d2111b413ffc',
            fullName: 'Chelsea FC',
            commonName: 'Chelsea',
            shortName: 'CHE',
            country: 'United Kingdom',
            clubLogoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679422856/vr0isj4q0v3qg5cgkp9s.png',
            stadium: 'Stamford Bridge',
            createdAt: '2023-03-21T18:20:43.873Z',
            updatedAt: '2023-03-21T18:20:43.873Z',
          },
        ],
        error: null
      },
      competitions: {
        status: 'succeeded',
        data: {
          competitions: [
            {
              _id: '641ca17ae8277803cff5195e',
              fullName: 'Premier League',
              shortName: 'EPL',
              country: 'United Kingdom',
              clubs: [
                {
                  _id: '6419a26d6e0212a0462b4dd2',
                  fullName: 'Arsenal FC',
                  commonName: 'Arsenal',
                  shortName: 'ARS',
                  country: 'United Kingdom',
                  clubLogoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679401593/r3ci6rp4umjhlnduimtp.svg',
                  stadium: 'Emirates Stadium',
                  createdAt: '2023-03-21T12:26:21.895Z',
                  updatedAt: '2023-03-21T12:26:21.895Z',
                },
                {
                  _id: '6419f57b1f12d2111b413ffc',
                  fullName: 'Chelsea FC',
                  commonName: 'Chelsea',
                  shortName: 'CHE',
                  country: 'United Kingdom',
                  clubLogoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679422856/vr0isj4q0v3qg5cgkp9s.png',
                  stadium: 'Stamford Bridge',
                  createdAt: '2023-03-21T18:20:43.873Z',
                  updatedAt: '2023-03-21T18:20:43.873Z',
                },
              ],
              logoUrl: 'https://res.cloudinary.com/dsda5p1om/image/upload/v1679597956/vkiuz7tx9ng5jfy5pz7k.png',
              type: 'league',
              createdAt: '2023-03-23T18:59:06.430Z',
            },
          ],
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Provider store={store}>
            {children}
          </Provider>
        </LocalizationProvider>
      </MemoryRouter>
    };
  
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
  };
  