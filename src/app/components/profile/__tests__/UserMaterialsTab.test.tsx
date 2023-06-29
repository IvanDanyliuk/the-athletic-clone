import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import { UserMaterialsTab } from '../';
import { setupUsersSuccessHandlers } from '../../../utils/testing/serverMocks/users';
import { setupMaterialsErrorHandlers, setupMaterialsSuccessHandlers } from '../../../utils/testing/serverMocks/materials';
import { renderWithProviders } from '../../../utils/testing/customRenderMethod';
import { materialsStateErrorMock, materialsStateSuccessMock } from '../../../utils/testing/testDataMocks/materials';
import { usersStateSuccessMock } from '../../../utils/testing/testDataMocks/users';


const mockedUseDispatch = jest.fn();
const mockedUseNavigate = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux') as any,
 useDispatch: () => mockedUseDispatch,
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
 useNavigate: () => mockedUseNavigate,
}));


describe('UserMaterialsTab tests: success cases', () => {
  beforeEach(() => {
    setupUsersSuccessHandlers();
    setupMaterialsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the table data', async () => {
    renderWithProviders(<UserMaterialsTab />);
    expect(screen.getAllByTestId('materialRow')).toHaveLength(materialsStateSuccessMock.data.main.materials.length);
  });

  test('should sort table materials by clicking the arrow button in the table header', async () => {
    renderWithProviders(<UserMaterialsTab />);
    fireEvent.click(screen.getAllByTestId('ArrowDownwardIcon')[0]);
    fireEvent.click(screen.getAllByTestId('ArrowDownwardIcon')[1]);
    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });

  test('should change page by clicking the arrow button in the table footer', async () => {
    renderWithProviders(<UserMaterialsTab />);
    const arrowRightBtn = screen.getByTestId('KeyboardArrowRightIcon');
    fireEvent.click(arrowRightBtn);
    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });

  test('should delete material by clicking the delete button', async () => {
    renderWithProviders(<UserMaterialsTab />);
    fireEvent.click(screen.getAllByTestId('CloseIcon')[0]);
    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });

  test('should render the loader component is materials status is loading', async () => {
    renderWithProviders(
      <UserMaterialsTab />,
      {
        preloadedState: {
          materials: {
            ...materialsStateSuccessMock,
            status: 'loading'
          },
          users: usersStateSuccessMock
        }
      }
    );
    await waitFor(() => {
      expect(screen.getByTestId('backgroundLoader')).toBeInTheDocument();
    });
  });
});

describe('UserMaterialsTab tests: error cases', () => {
  beforeEach(() => {
    setupUsersSuccessHandlers();
    setupMaterialsErrorHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should close the error snackbar by click the close snackbar button', async () => {
    renderWithProviders(
      <UserMaterialsTab />,
      {
        preloadedState: {
          materials: materialsStateErrorMock,
          users: usersStateSuccessMock
        }
      }
    );
    fireEvent.click(screen.getByTestId('CloseIcon'));
    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });

  test('should call the useNavigate hook if the user is not authorized', async () => {
    renderWithProviders(
      <UserMaterialsTab />,
      {
        preloadedState: {
          materials: materialsStateErrorMock,
          users: {
            ...usersStateSuccessMock,
            user: null
          }
        }
      }
    );
    await waitFor(() => {
      expect(mockedUseNavigate).toHaveBeenCalled();
    });
  });
});