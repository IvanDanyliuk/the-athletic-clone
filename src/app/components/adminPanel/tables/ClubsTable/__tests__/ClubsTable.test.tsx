import { screen, fireEvent, cleanup, waitFor, act } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupClubsErrorHandlers, setupClubsSuccessHandlers } from '../../../../../utils/testing/serverMocks/clubs';
import { clubsStateErrorMock, clubsStateSuccessMock } from '../../../../../utils/testing/testDataMocks/clubs';
import { ClubsTable } from '../';
import { StateStatus } from '../../../../../../features/types';


const clubsStateMock = {
  status: StateStatus.Loading,
  data: {
    main: {
      clubs: [],
      clubsCount: 0
    },
    club: null
  },
  filters: null,
  clubsByCountry: [],
  error: null
};

const mockedUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux') as any,
  useDispatch: () => mockedUseDispatch,
}));


describe('ClubsTable tests: success response', () => {
  beforeEach(() => {
    setupClubsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });
 
  test('should call the dispatch method after clicking on the arrow button to change page', async () => {
    //eslint-disable-next-line
    await act(async () => {
      renderWithProviders(
        <ClubsTable />, 
        { 
          preloadedState: 
          { 
            clubs: clubsStateSuccessMock 
          } 
        }
      );
    });

    //eslint-disable-next-line
    await act(async () => {
      fireEvent.click(screen.getAllByTestId('ArrowDownwardIcon')[0]);
    });

    //eslint-disable-next-line
    await act(async () => {
      fireEvent.click(screen.getAllByTestId('ArrowDownwardIcon')[0]);
    });

    //eslint-disable-next-line
    await act(async () => {
      fireEvent.click(screen.getAllByTestId('ArrowDownwardIcon')[1]);
    });

    fireEvent.click(screen.getByTestId('KeyboardArrowRightIcon'));

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  })

  test('should render the ClubsTable component: loading status case', async () => {
    renderWithProviders(
      <ClubsTable />,
      {
        preloadedState: {
          clubs: clubsStateMock
        }
      }
    );
    expect(screen.getByTestId('backgroundLoader')).toBeInTheDocument();
  });
});

describe('ClubsTable tests: error response', () => {
  beforeEach(() => {
    setupClubsErrorHandlers();
    //eslint-disable-next-line
    renderWithProviders(
      <ClubsTable />,
      {
        preloadedState: {
          clubs: clubsStateErrorMock
        }
      }
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('should show the error snackbar when a server error occurs', async () => {
    expect(screen.getByText(clubsStateErrorMock.error!)).toBeInTheDocument();
  });

  test('should close the error snackbar after clicking on the close button', async () => {
    const closeBtn = screen.getByTestId('CloseIcon');
    fireEvent.click(closeBtn);

    await waitFor(() => {
      const errorAlert = screen.queryByRole('alert');
      expect(errorAlert).not.toBeInTheDocument();
    });
  });
});