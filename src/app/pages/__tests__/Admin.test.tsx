import { cleanup, screen } from '@testing-library/react';
import { Admin } from '../';
import { renderWithProviders } from '../../utils/testing/customRenderMethod';
import { setupUsersSuccessHandlers } from '../../utils/testing/serverMocks/users';
import { usersStateSuccessMock } from '../../utils/testing/testDataMocks/users';


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUseNavigate,
}));


describe('Admin page tests', () => {
  beforeEach(() => {
    setupUsersSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should call the useNavigate hook if the user role is not admin', async () => {
    renderWithProviders(
      <Admin />,
      {
        preloadedState: {
          users: {
            ...usersStateSuccessMock,
            user: {
              ...usersStateSuccessMock.user!,
              role: 'author'
            }
          }
        }
      }
    );
    expect(mockedUseNavigate).toHaveBeenCalled();
  });

  test('should not call the useNavigate hook if the user role is admin', async () => {
    renderWithProviders(
      <Admin />,
      {
        preloadedState: {
          users: usersStateSuccessMock
        }
      }
    );
    expect(mockedUseNavigate).not.toHaveBeenCalled();
  });
});