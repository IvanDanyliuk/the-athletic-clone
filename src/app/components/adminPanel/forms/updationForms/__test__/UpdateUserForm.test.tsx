import { cleanup, screen, waitFor } from '@testing-library/react';
import { UpdateUserForm } from '../';
import { setupUsersSuccessHandlers } from '../../../../../utils/testing/serverMocks/users';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod';
import { userToUpdate } from '../../../../../utils/testing/testDataMocks/users';


describe('UpdateUserForm tests', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      value: {
        search: `/users/edit/${userToUpdate._id}`,
      },
    });
    setupUsersSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the component', async () => {
    renderWithProviders(<UpdateUserForm />);
    await waitFor(() => {
      expect(screen.getByTestId('userForm')).toBeInTheDocument();
    });
  });
});