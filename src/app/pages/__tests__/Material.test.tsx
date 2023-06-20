import { cleanup, fireEvent, screen } from '@testing-library/react';
import { Material } from '../';
import { renderWithProviders } from '../../utils/testing/customRenderMethod';
import { setupMaterialsSuccessHandlers } from '../../utils/testing/serverMocks/materials';
import { articleToUpdate, materialsStateSuccessMock } from '../../utils/testing/testDataMocks/materials';
import { setupUsersSuccessHandlers } from '../../utils/testing/serverMocks/users';
import { userToUpdate, usersStateSuccessMock } from '../../utils/testing/testDataMocks/users';


const mockedUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux') as any,
  useDispatch: () => mockedUseDispatch,
}));

describe('Club page tests', () => {
  beforeEach(() => {
    setupMaterialsSuccessHandlers();
    setupUsersSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the Material page', async () => {
    renderWithProviders(
      <Material />,
      {
        preloadedState: {
          materials: {
            ...materialsStateSuccessMock,
            data: {
              ...materialsStateSuccessMock.data,
              material: articleToUpdate
            }
          }
        }
      }
    );
    expect(screen.getByText(articleToUpdate.title)).toBeInTheDocument();
  });

  test('should render the loader component', async () => {
    renderWithProviders(
      <Material />,
      {
        preloadedState: {
          materials: {
            ...materialsStateSuccessMock,
            data: {
              ...materialsStateSuccessMock.data,
              material: null
            }
          }
        }
      }
    );
    expect(screen.getByTestId('backgroundLoader')).toBeInTheDocument();
  });

  test('should call the useDispatch hook after clicking the material like button: unliked post', async () => {
    renderWithProviders(
      <Material />,
      {
        preloadedState: {
          materials: {
            ...materialsStateSuccessMock,
            data: {
              ...materialsStateSuccessMock.data,
              material: articleToUpdate
            }
          },
          users: {
            ...usersStateSuccessMock,
            user: userToUpdate
          }
        }
      }
    );
    const likeBtn = screen.getByTestId('ChatBubbleOutlinedIcon');
    fireEvent.click(likeBtn);
    expect(mockedUseDispatch).toHaveBeenCalled();
  });

  test('should call the useDispatch hook after clicking the material like button: liked post', async () => {
    renderWithProviders(
      <Material />,
      {
        preloadedState: {
          materials: {
            ...materialsStateSuccessMock,
            data: {
              ...materialsStateSuccessMock.data,
              material: {
                ...articleToUpdate,
                likes: [userToUpdate._id!]
              }
            }
          },
          users: {
            ...usersStateSuccessMock,
            user: userToUpdate
          }
        }
      }
    );

    const likeBtn = screen.getByTestId('ChatBubbleOutlinedIcon');
    fireEvent.click(likeBtn);
    expect(mockedUseDispatch).toHaveBeenCalled();
  });
});