import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import { Register } from '../';
import { setupUsersSuccessHandlers } from '../../utils/testing/serverMocks/users';
import { renderWithProviders } from '../../utils/testing/customRenderMethod';


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUseNavigate,
}));


describe('Register page tests', () => {
  beforeEach(() => {
    setupUsersSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should call the useNavigate hook after submitting the form', async () => {
    renderWithProviders(<Register />);

    const emailField = screen.getByRole('textbox');
    fireEvent.change(emailField, { target: { value: 'new_user@gmail.com' } });

    const continueBtn = screen.getByRole('button', { name: 'Continue' });
    fireEvent.click(continueBtn);

    const emailSecondField = screen.getByLabelText('Email');
    const passwordField = screen.getByLabelText('Password');
    const firstNameField = screen.getByLabelText('First Name');
    const lastNameField = screen.getByLabelText('Last Name');

    fireEvent.change(emailSecondField, { target: { value: 'new_user@gmail.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });
    fireEvent.change(firstNameField, { target: { value: 'New' } });
    fireEvent.change(lastNameField, { target: { value: 'User' } });

    const submitBtn = screen.getByRole('button', { name: 'Create Account' });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockedUseNavigate).toHaveBeenCalled();
    });
  });

  test('should switch the form mode after clicking on the Back button', async () => {
    renderWithProviders(<Register />);

    const emailField = screen.getByRole('textbox');
    fireEvent.change(emailField, { target: { value: 'new_user@gmail.com' } });

    const continueBtn = screen.getByRole('button', { name: 'Continue' });
    fireEvent.click(continueBtn);

    const backBtn = screen.getByRole('button', { name: 'Back' });
    fireEvent.click(backBtn);

    expect(screen.getByRole('button', { name: 'Continue' })).toBeInTheDocument();
  });
});