import { screen, fireEvent, cleanup, waitFor, act } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupPlayersSuccessHandlers } from '../../../../../utils/testing/serverMocks/players';
import { playersStateSuccessMock } from '../../../../../utils/testing/testDataMocks/players';
import PlayersTable from '../PlayersTable';


const playersStateMock = {
  status: 'loading',
  data: {
    players: [],
    playersCount: 0
  },
  filters: null,
  error: null
};

const mockedUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux') as any,
  useDispatch: () => mockedUseDispatch,
}));


describe('PlayersTable tests', () => {
  beforeEach(() => {
    setupPlayersSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should call the dispatch method after clicking on the arrow button to change page', async () => {
    //eslint-disable-next-line
    await act(async () => {
      renderWithProviders(<PlayersTable />, { preloadedState: { players: playersStateSuccessMock } });
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

  test('should render the CompetitionsTable component: loading status case', async () => {
    renderWithProviders(
      <PlayersTable />,
      {
        preloadedState: {
          players: playersStateMock
        }
      }
    );
    expect(screen.getByTestId('backgroundLoader')).toBeInTheDocument();
  });
});