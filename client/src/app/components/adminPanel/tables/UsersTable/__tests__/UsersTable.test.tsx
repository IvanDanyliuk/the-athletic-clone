import { screen, fireEvent, cleanup, waitFor, act } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupUsersErrorHandlers, setupUsersSuccessHandlers } from '../../../../../utils/testing/serverMocks/users';
import { usersStateErrorMock, usersStateSuccessMock } from '../../../../../utils/testing/testDataMocks/users';
import { UsersTable } from '../';
import { StateStatus } from '../../../../../../features/types';


const usersStateMock = {
  status: StateStatus.Loading,
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
  countries: [],
  filters: null,
  error: null
};

const mockedUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux') as any,
  useDispatch: () => mockedUseDispatch,
}));


describe('UsersTable tests', () => {
  beforeEach(() => {
    setupUsersSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should call the dispatch method after clicking on the arrow button to change page', async () => {
    //eslint-disable-next-line
    await act(async () => {
      renderWithProviders(<UsersTable />, { preloadedState: { users: usersStateSuccessMock } });
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
      <UsersTable />,
      {
        preloadedState: {
          users: usersStateMock
        }
      }
    );
    expect(screen.getByTestId('backgroundLoader')).toBeInTheDocument();
  });
});

describe('UsersTable tests: error response', () => {
  beforeEach(() => {
    setupUsersErrorHandlers();
    //eslint-disable-next-line
    renderWithProviders(
      <UsersTable />,
      {
        preloadedState: {
          users: usersStateErrorMock
        }
      }
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('should show the error snackbar when a server error occurs', async () => {
    expect(screen.getByText(usersStateErrorMock.error!)).toBeInTheDocument();
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