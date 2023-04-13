import { screen, fireEvent, cleanup, waitFor, act } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupSchedulesSuccessHandlers } from '../../../../../utils/testing/serverMocks/schedules';
import { schedulesStateSuccessMock } from '../../../../../utils/testing/testDataMocks/schedules';
import SchedulesTable from '../SchedulesTable';


const schedulesStateMock = {
  status: 'loading',
  data: {
    schedules: [],
    schedulesCount: 0
  },
  filters: null,
  error: null
};

const mockedUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux') as any,
  useDispatch: () => mockedUseDispatch,
}));


describe('SchedulesTable tests', () => {
  beforeEach(() => {
    setupSchedulesSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should call the dispatch method after clicking on the arrow button to change page', async () => {
    //eslint-disable-next-line
    await act(async () => {
      renderWithProviders(<SchedulesTable />, { preloadedState: { schedules: schedulesStateSuccessMock } });
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
      <SchedulesTable />,
      {
        preloadedState: {
          schedules: schedulesStateMock
        }
      }
    );
    expect(screen.getByTestId('backgroundLoader')).toBeInTheDocument();
  });
});