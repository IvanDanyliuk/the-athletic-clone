import { cleanup, screen } from '@testing-library/react';
import { Profile } from '../';
import { renderWithProviders } from '../../utils/testing/customRenderMethod';
import { userToUpdate, usersStateSuccessMock } from '../../utils/testing/testDataMocks/users';
import { setupUsersSuccessHandlers } from '../../utils/testing/serverMocks/users';


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUseNavigate,
}));


describe('Profile page tests', () => {
  beforeEach(() => {
    setupUsersSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render all the navigation links if the user\'s role is admin or author', () => {
    renderWithProviders(
      <Profile />,
      {
        preloadedState: {
          users: {
            ...usersStateSuccessMock,
            user: userToUpdate
          }
        }
      }
    );
    expect(screen.getAllByRole('link')).toHaveLength(2)
  });

  test('should render one link (My Profile) if the user\'s role is reader', () => {
    renderWithProviders(
      <Profile />,
      {
        preloadedState: {
          users: {
            ...usersStateSuccessMock,
            user: {
              ...userToUpdate,
              role: 'reader'
            }
          }
        }
      }
    );
    expect(screen.getAllByRole('link')).toHaveLength(1)
  });

  test('should call the useNavigate hook if the use is not authorized', () => {
    renderWithProviders(
      <Profile />,
      {
        preloadedState: {
          users: {
            ...usersStateSuccessMock,
            user: null
          }
        }
      }
    );
    expect(mockedUseNavigate).toHaveBeenCalled();
  });
});