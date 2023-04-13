import { screen, fireEvent, cleanup, waitFor, act } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupClubsSuccessHandlers } from '../../../../../utils/testing/serverMocks/clubs';
import CompetitionsTable from '../CompetitionsTable';
import { competitionsStateSuccessMock } from '../../../../../utils/testing/testDataMocks/competitions';
import { setupCompetitionsSuccessHandlers } from '../../../../../utils/testing/serverMocks/competitions';


const competitionsStateMock = {
  status: 'loading',
  data: {
    competitions: [],
    competitionsCount: 0
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


describe('CompetitionsTable tests', () => {
  beforeEach(() => {
    setupClubsSuccessHandlers();
    setupCompetitionsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should call the dispatch method after clicking on the arrow button to change page', async () => {
    //eslint-disable-next-line
    await act(async () => {
      renderWithProviders(<CompetitionsTable />, { preloadedState: { competitions: competitionsStateSuccessMock } });
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
      <CompetitionsTable />,
      {
        preloadedState: {
          competitions: competitionsStateMock
        }
      }
    );
    expect(screen.getByTestId('backgroundLoader')).toBeInTheDocument();
  });
});