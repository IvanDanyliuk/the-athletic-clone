import { screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupUsersSuccessHandlers } from '../../../../../utils/testing/serverMocks/users';
import UserForm from '../UserForm';
import { userToUpdate } from '../../../../../utils/testing/testDataMocks/users';


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUseNavigate,
}));


describe('UserForm tests', () => {
  beforeEach(() => {
    setupUsersSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should submit the creation form after passing user data', async () => {
    renderWithProviders(<UserForm />);

    const textFields = screen.getAllByTestId('textField');
    const submitBtn = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(textFields[0], { target: { value: 'Test First Name' } });
    fireEvent.change(textFields[1], { target: { value: 'Test Last Name' } });
    fireEvent.change(textFields[2], { target: { value: 'test@gmail.com' } });
    fireEvent.change(textFields[3], { target: { value: '123456' } });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockedUseNavigate).toHaveBeenCalled();
    });
  });

  test('should submit the updation form after passing user data', async () => {
    renderWithProviders(<UserForm userToUpdate={userToUpdate} />);

    const textFields = screen.getAllByTestId('textField');
    const submitBtn = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(textFields[0], { target: { value: 'Test First Name' } });
    fireEvent.change(textFields[1], { target: { value: 'Test Last Name' } });
    fireEvent.change(textFields[2], { target: { value: 'test@gmail.com' } });
    fireEvent.change(textFields[3], { target: { value: '123456' } });
    fireEvent.click(submitBtn);
    
    await waitFor(() => {
      expect(mockedUseNavigate).toHaveBeenCalled();
    });
  });
});