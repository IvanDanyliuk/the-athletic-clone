import { act, cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import { setupMaterialsSuccessHandlers } from '../../../utils/testing/serverMocks/materials';
import { renderWithProviders } from '../../../utils/testing/customRenderMethod';
import { materialsStateSuccessMock, postToUpdate } from '../../../utils/testing/testDataMocks/materials';
import { competitionToUpdate } from '../../../utils/testing/testDataMocks/competitions';
import { setupCompetitionsSuccessHandlers } from '../../../utils/testing/serverMocks/competitions';
import { setupClubsSuccessHandlers } from '../../../utils/testing/serverMocks/clubs';
import { setupUsersSuccessHandlers } from '../../../utils/testing/serverMocks/users';
import { clubToUpdate } from '../../../utils/testing/testDataMocks/clubs';
import { userToUpdate } from '../../../utils/testing/testDataMocks/users';
import PostsSearch from '../PostsSearch';


const mockedUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux') as any,
  useDispatch: () => mockedUseDispatch,
}));


describe('PostsSearch tests', () => {
  beforeEach(() => {
    setupMaterialsSuccessHandlers();
    setupCompetitionsSuccessHandlers();
    setupClubsSuccessHandlers();
    setupUsersSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should call the dispatch function after passing the search request to the search field', async () => {
    jest.useFakeTimers();
    renderWithProviders(
      <PostsSearch />,
      {
        preloadedState: {
          materials: {
            ...materialsStateSuccessMock,
            searchValues: {
              competitions: [competitionToUpdate],
              clubs: [],
              authors: []
            }
          }
        }
      }
    );

    const searchModeSwitchBtn = screen.getByTestId('SearchIcon');
    fireEvent.click(searchModeSwitchBtn);

    const searchField = screen.getByRole('textbox');
    fireEvent.change(searchField, { target: { value: 'Premier League' } });

    const searchedData = await screen.findByText(competitionToUpdate.fullName);
    fireEvent.click(searchedData);

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
    jest.useRealTimers();
  });

  test('should not call the dispatch function after passing an empty string to the search field', async () => {
    jest.useFakeTimers();
    renderWithProviders(
      <PostsSearch />,
      {
        preloadedState: {
          materials: {
            ...materialsStateSuccessMock,
            searchValues: {
              competitions: [],
              clubs: [],
              authors: []
            }
          }
        }
      }
    );

    const searchModeSwitchBtn = screen.getByTestId('SearchIcon');
    fireEvent.click(searchModeSwitchBtn);

    const searchField = screen.getByRole('textbox');
    fireEvent.change(searchField, { target: { value: '' } });

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => {
      expect(mockedUseDispatch).not.toHaveBeenCalled();
    });
    jest.useRealTimers();
  });

  test('should call the dispatch function after clearing the search field by clicking the clear request field button', async () => {
    renderWithProviders(
      <PostsSearch />,
      {
        preloadedState: {
          materials: {
            ...materialsStateSuccessMock,
            searchValues: {
              competitions: [],
              clubs: [clubToUpdate],
              authors: []
            }
          }
        }
      }
    );

    const searchModeSwitchBtn = screen.getByTestId('SearchIcon');
    fireEvent.click(searchModeSwitchBtn);

    const searchField = screen.getByRole('textbox');
    fireEvent.change(searchField, { target: { value: 'Arsenal' } });

    const clearSearchFieldBtn = await screen.findByTestId('CloseIcon');
    fireEvent.click(clearSearchFieldBtn);

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });

  test('should call the dispatch function after clicking the trending filter button', async () => {
    renderWithProviders(
      <PostsSearch />,
      {
        preloadedState: {
          materials: {
            ...materialsStateSuccessMock,
            data: {
              ...materialsStateSuccessMock.data,
              material: postToUpdate
            },
            searchValues: {
              competitions: [competitionToUpdate],
              clubs: [],
              authors: []
            }
          }
        }
      }
    );

    const trendingFilterBtn = screen.getByTestId('TrendingUpIcon');
    fireEvent.click(trendingFilterBtn);

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });

  test('should not call the dispatch function after clicking the trending filter button if post not found', async () => {
    renderWithProviders(
      <PostsSearch />,
      {
        preloadedState: {
          materials: {
            ...materialsStateSuccessMock,
            data: {
              ...materialsStateSuccessMock.data,
              material: null
            },
            searchValues: {
              competitions: [competitionToUpdate],
              clubs: [],
              authors: []
            }
          }
        }
      }
    );

    const trendingFilterBtn = screen.getByTestId('TrendingUpIcon');
    fireEvent.click(trendingFilterBtn);

    await waitFor(() => {
      expect(mockedUseDispatch).not.toHaveBeenCalled();
    });
  });

  test('should call the dispatch function after clicking the latest filter button', async () => {
    renderWithProviders(
      <PostsSearch />,
      {
        preloadedState: {
          materials: {
            ...materialsStateSuccessMock,
            data: {
              ...materialsStateSuccessMock.data,
              material: postToUpdate
            },
            searchValues: {
              competitions: [],
              clubs: [],
              authors: [userToUpdate]
            }
          }
        }
      }
    );

    const latestFilterBtn = screen.getByText('Latest');
    fireEvent.click(latestFilterBtn);

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });
});