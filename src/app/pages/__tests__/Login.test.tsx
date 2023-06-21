import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import { Login } from '../';
import { setupUsersSuccessHandlers } from '../../utils/testing/serverMocks/users';
import { renderWithProviders } from '../../utils/testing/customRenderMethod';
import { usersStateSuccessMock } from '../../utils/testing/testDataMocks/users';


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUseNavigate,
}));


describe('Login page tests', () => {
  beforeEach(() => {
    setupUsersSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should call the useNavigate hook after submitting form: correct credentials', async () => {
    renderWithProviders(
      <Login />,
      {
        preloadedState: {
          users: {
            ...usersStateSuccessMock,
            status: 'idle',
            filters: null,
            user: null,
            countries: [],
            error: null
          },
        }
      }
    );
    
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(emailInput, { target: { value: 'j.doe@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: '$2b$10$ExFCWbpvyxkX502OleAlLOXEJczvCv8Hw65GkArU0Ds0IY6LF2.8C' } });
    
    const loginBtn = screen.getByRole('button', { name: 'Log in' });
    fireEvent.click(loginBtn);
    
    await waitFor(() => {
      expect(mockedUseNavigate).toHaveBeenCalled();
    });
  });

  test('should not call the useNavigate hook after submitting form: wrong credentials', async () => {
    renderWithProviders(
      <Login />,
      {
        preloadedState: {
          users: {
            ...usersStateSuccessMock,
            status: 'failed',
            filters: null,
            user: null,
            countries: [],
            error: 'User not authenticated'
          },
        }
      }
    );
    
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(emailInput, { target: { value: 'example@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: '52136745217345216735421768354' } });
    
    const loginBtn = screen.getByRole('button', { name: 'Log in' });
    fireEvent.click(loginBtn);

    const closeBtn = screen.getByTestId('CloseIcon');
    fireEvent.click(closeBtn);
    
    await waitFor(() => {
      expect(mockedUseNavigate).not.toHaveBeenCalled();
    });
  });
});