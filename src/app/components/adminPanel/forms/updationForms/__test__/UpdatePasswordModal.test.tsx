import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import { UpdatePasswordModal } from '../';
import { setupUsersSuccessHandlers } from '../../../../../utils/testing/serverMocks/users';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod';


const updatePasswordHandlerMock = jest.fn();


describe('UpdatePasswordModal tests', () => {
  beforeEach(() => {
    setupUsersSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should open the modal form by clicking the Update Password button', async () => {
    renderWithProviders(<UpdatePasswordModal onUpdate={updatePasswordHandlerMock} />);

    fireEvent.click(screen.getByRole('button', { name: 'Update Password' }));
    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));

    await waitFor(() => {
      expect(screen.getByTestId('updatePasswordForm')).toBeInTheDocument();
    });
  });

  test('should submit the modal form by clicking the Update button: correct data', async () => {
    renderWithProviders(<UpdatePasswordModal onUpdate={updatePasswordHandlerMock} />);

    fireEvent.click(screen.getByRole('button', { name: 'Update Password' }));
    fireEvent.change(screen.getByLabelText('Current Password'), { target: { value: '123456' } });
    fireEvent.change(screen.getByLabelText('New Password'), { target: { value: '123456' } });
    fireEvent.change(screen.getByLabelText('Confirm New Password'), { target: { value: '123456' } });
    fireEvent.click(screen.getByRole('button', { name: 'Update' }));

    await waitFor(() => {
      expect(updatePasswordHandlerMock).toHaveBeenCalled();
    });
  });

  test('should not submit the modal form by clicking the Update button: incorrect data', async () => {
    renderWithProviders(<UpdatePasswordModal onUpdate={updatePasswordHandlerMock} />);
    
    fireEvent.click(screen.getByRole('button', { name: 'Update Password' }));
    fireEvent.change(screen.getByLabelText('Current Password'), { target: { value: '123456' } });
    fireEvent.change(screen.getByLabelText('New Password'), { target: { value: '123456' } });
    fireEvent.change(screen.getByLabelText('Confirm New Password'), { target: { value: '111111' } });
    fireEvent.click(screen.getByRole('button', { name: 'Update' }));

    await waitFor(() => {
      expect(updatePasswordHandlerMock).not.toHaveBeenCalled();
    });
  });
});