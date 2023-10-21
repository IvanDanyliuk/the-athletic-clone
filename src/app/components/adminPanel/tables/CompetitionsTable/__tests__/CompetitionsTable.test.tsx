import { screen, fireEvent, cleanup, waitFor, act } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupClubsSuccessHandlers } from '../../../../../utils/testing/serverMocks/clubs';
import { competitionsStateErrorMock, competitionsStateSuccessMock } from '../../../../../utils/testing/testDataMocks/competitions';
import { setupCompetitionsErrorHandlers, setupCompetitionsSuccessHandlers } from '../../../../../utils/testing/serverMocks/competitions';
import { CompetitionsTable } from '../';
import { StateStatus } from '../../../../../../features/types';


const competitionsStateMock = {
  status: StateStatus.Loading,
  data: {
    main: {
      competitions: [],
      competitionsCount: 0
    },
    competition: null
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


describe('CompetitionsTable tests: success response', () => {
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

describe('CompetitionsTable tests: error response', () => {
  beforeEach(() => {
    setupCompetitionsErrorHandlers();
    //eslint-disable-next-line
    renderWithProviders(
      <CompetitionsTable />,
      {
        preloadedState: {
          competitions: competitionsStateErrorMock
        }
      }
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('should show the error snackbar when a server error occurs', async () => {
    expect(screen.getByText(competitionsStateErrorMock.error!)).toBeInTheDocument();
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