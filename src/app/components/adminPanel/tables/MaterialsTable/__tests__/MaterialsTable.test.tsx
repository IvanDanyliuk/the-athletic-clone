import { screen, fireEvent, cleanup, waitFor, act } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupMaterialsErrorHandlers, setupMaterialsSuccessHandlers } from '../../../../../utils/testing/serverMocks/materials';
import { materialsStateErrorMock, materialsStateSuccessMock } from '../../../../../utils/testing/testDataMocks/materials';
import { setupContentErrorHandlers, setupContentSuccessHandlers } from '../../../../../utils/testing/serverMocks/content';
import MaterialsTable from '../MaterialsTable';


const materialsStateMock = {
  status: 'loading',
  data: {
    materials: [],
    materialsCount: 0
  },
  authors: [],
  filters: null,
  error: null
};

const mockedUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux') as any,
  useDispatch: () => mockedUseDispatch,
}));


describe('MaterialsTable tests', () => {
  beforeEach(() => {
    setupMaterialsSuccessHandlers();
    setupContentSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should call the dispatch method after clicking on the arrow button to change page', async () => {
    //eslint-disable-next-line
    await act(async () => {
      renderWithProviders(<MaterialsTable />, { preloadedState: { materials: materialsStateSuccessMock } });
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
      <MaterialsTable />,
      {
        preloadedState: {
          materials: materialsStateMock
        }
      }
    );
    expect(screen.getByTestId('backgroundLoader')).toBeInTheDocument();
  });
});

describe('MaterialsTable tests: error response', () => {
  beforeEach(() => {
    setupMaterialsErrorHandlers();
    setupContentErrorHandlers();
    //eslint-disable-next-line
    renderWithProviders(
      <MaterialsTable />,
      {
        preloadedState: {
          materials: materialsStateErrorMock
        }
      }
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('should show the error snackbar when a server error occurs', async () => {
    expect(screen.getByText(materialsStateErrorMock.error!)).toBeInTheDocument();
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