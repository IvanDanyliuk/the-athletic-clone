import { screen, fireEvent, cleanup, waitFor, act } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupClubsSuccessHandlers } from '../../../../../utils/testing/serverMocks/clubs';
import { clubsStateSuccessMock } from '../../../../../utils/testing/testDataMocks/clubs';
import ClubsTable from '../ClubsTable';


const clubsStateMock = {
  status: 'loading',
  data: {
    clubs: [],
    clubsCount: 0
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


describe('ClubsTable tests', () => {
  beforeEach(() => {
    setupClubsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should call the dispatch method after clicking on the arrow button to change page', async () => {
    //eslint-disable-next-line
    await act(async () => {
      renderWithProviders(<ClubsTable />, { preloadedState: { clubs: clubsStateSuccessMock } });
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