import { cleanup, screen } from '@testing-library/react';
import { setupMaterialsSuccessHandlers } from '../../../utils/testing/serverMocks/materials';
import { renderWithProviders } from '../../../utils/testing/customRenderMethod';
import { materialsStateSuccessMock, postToUpdate } from '../../../utils/testing/testDataMocks/materials';
import { PostList } from '../';


describe('PostList tests', () => {
  beforeEach(() => {
    setupMaterialsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the post data if searched posts exist', async () => {
    renderWithProviders(
      <PostList />,
      {
        preloadedState: {
          materials: {
            ...materialsStateSuccessMock,
            search: [postToUpdate]
          }
        }
      }
    );
    expect(screen.getByText(postToUpdate.author.name)).toBeInTheDocument();
  });

  test('should render the the message if searched does not posts exist', async () => {
    renderWithProviders(
      <PostList />,
      {
        preloadedState: {
          materials: {
            ...materialsStateSuccessMock,
            search: null
          }
        }
      }
    );
    expect(screen.getByText('Cannot find materials related to your request.')).toBeInTheDocument();
  });
});