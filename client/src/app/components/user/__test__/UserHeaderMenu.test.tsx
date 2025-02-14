import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import { UserHeaderMenu } from '../';
import { userToUpdate } from '../../../utils/testing/testDataMocks/users';
import { renderWithProviders } from '../../../utils/testing/customRenderMethod';


const mockedUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux') as any,
 useDispatch: () => mockedUseDispatch,
}));


describe('UserHeaderMenu tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('should open the menu by clicking the open menu button', () => {
    renderWithProviders(<UserHeaderMenu user={userToUpdate} />);
    fireEvent.click(screen.getByRole('img'));
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  test('should call the useDispatch hook by clicking the logout button', async () => {
    renderWithProviders(<UserHeaderMenu user={userToUpdate} />);
    fireEvent.click(screen.getByRole('img'));
    fireEvent.click(screen.getByRole('menuitem', { name: 'Logout' }));
    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });

  test('should close the menu by clicking the menu item', async () => {
    renderWithProviders(<UserHeaderMenu user={userToUpdate} />);
    fireEvent.click(screen.getByRole('img'));
    fireEvent.click(screen.getAllByRole('menuitem')[0]);
    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });
});