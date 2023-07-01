import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import { UserDataTab } from '../';
import { setupUsersSuccessHandlers } from '../../../utils/testing/serverMocks/users';
import { renderWithProviders } from '../../../utils/testing/customRenderMethod';
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


describe('UserDataTab tests', () => {
  beforeEach(() => {
    setupUsersSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the user data', async () => {
    renderWithProviders(<UserDataTab />);
    expect(screen.getByText(`${usersStateSuccessMock.user?.firstName} ${usersStateSuccessMock.user?.lastName}`)).toBeInTheDocument();
  });

  test('should show the user data edit form by switching the edit mode', async () => {
    renderWithProviders(<UserDataTab />);
    fireEvent.click(screen.getByRole('button', { name: 'Edit' }));
    expect(screen.getByTestId('userForm')).toBeInTheDocument();
  });

  test('should show the change password edit form by switching the edit mode', async () => {
    renderWithProviders(<UserDataTab />);
    fireEvent.click(screen.getByRole('button', { name: 'Change Password' }));
    expect(screen.getByTestId('changePasswordForm')).toBeInTheDocument();
  });

  test('should submit the change password form if passed passwords are correct', async () => {
    renderWithProviders(<UserDataTab />);

    fireEvent.click(screen.getByRole('button', { name: 'Change Password' }));
    fireEvent.change(screen.getByLabelText('Current Password'), { target: { value: '123456' } });
    fireEvent.change(screen.getByLabelText('New Password'), { target: { value: '123456' } });
    fireEvent.change(screen.getByLabelText('Confirm Password'), { target: { value: '123456' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });

  test('should not submit the change password form if passed passwords are incorrect', async () => {
    renderWithProviders(<UserDataTab />);

    fireEvent.click(screen.getByRole('button', { name: 'Change Password' }));
    fireEvent.change(screen.getByLabelText('Current Password'), { target: { value: '123456' } });
    fireEvent.change(screen.getByLabelText('New Password'), { target: { value: '123456' } });
    fireEvent.change(screen.getByLabelText('Confirm Password'), { target: { value: '111111' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(mockedUseDispatch).not.toHaveBeenCalled();
    });
  });

  test('should call the useDispatch hook by clicking the Delete User button', async () => {
    renderWithProviders(<UserDataTab />);

    fireEvent.click(screen.getByRole('button', { name: 'Delete' }));
    fireEvent.click(screen.getByRole('button', { name: 'Yes' }));

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });

  test('should call useNavigate hook if user is not authorized', async () => {
    renderWithProviders(
      <UserDataTab />,
      {
        preloadedState: {
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

  test('should render the loader component if user status is loading', async () => {
    renderWithProviders(
      <UserDataTab />,
      {
        preloadedState: {
          users: {
            ...usersStateSuccessMock,
            status: 'loading'
          }
        }
      }
    );
    expect(screen.getByTestId('backgroundLoader')).toBeInTheDocument();
  });

  test('should render the error snackbar by passing wrong password data', async () => {
    renderWithProviders(
      <UserDataTab />,
      {
        preloadedState: {
          users: {
            ...usersStateSuccessMock,
            status: 'error',
            error: 'Passwords do not match'
          }
        }
      }
    );

    fireEvent.click(screen.getByRole('button', { name: 'Change Password' }));
    fireEvent.change(screen.getByLabelText('Current Password'), { target: { value: '111111' } });
    fireEvent.change(screen.getByLabelText('New Password'), { target: { value: '123456' } });
    fireEvent.change(screen.getByLabelText('Confirm Password'), { target: { value: '111111' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    fireEvent.click(screen.getByTestId('CloseIcon'));

    await waitFor(() => {
      expect(screen.getByTestId('errorSnackbar')).toBeInTheDocument();
    });
  });
});