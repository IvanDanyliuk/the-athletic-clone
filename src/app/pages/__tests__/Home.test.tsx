import { cleanup, screen } from '@testing-library/react';
import { Home } from '..';
import { setupMaterialsSuccessHandlers } from '../../utils/testing/serverMocks/materials';
import { renderWithProviders } from '../../utils/testing/customRenderMethod';
import { articleToUpdate, materialsStateSuccessMock, postToUpdate } from '../../utils/testing/testDataMocks/materials';
import { leagueMaterialsPropsMock, realContentStateMock } from '../../utils/testing/testDataMocks/content';
import { setupContentSuccessHandlers } from '../../utils/testing/serverMocks/content';


describe('Home page tests', () => {
  beforeEach(() => {
    setupMaterialsSuccessHandlers();
    setupContentSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });
  
  test('should render the Home page', async () => {
    renderWithProviders(
      <Home />,
      {
        preloadedState: {
          materials: {
            ...materialsStateSuccessMock,
            data: {
              ...materialsStateSuccessMock.data,
              homepage: {
                topMaterials: materialsStateSuccessMock.data.main.materials,
                latestPosts: [postToUpdate, postToUpdate, postToUpdate, postToUpdate, postToUpdate, postToUpdate, postToUpdate, postToUpdate],
                mustRead: articleToUpdate,
                leagueMaterials: leagueMaterialsPropsMock
              },
            },
          },
          content: realContentStateMock
        }
      }
    );
    expect(screen.getAllByRole('link')).toHaveLength(55);
  });

  test('should render the skeleton loader component', async () => {
    renderWithProviders(
      <Home />,
      {
        preloadedState: {
          materials: {
            ...materialsStateSuccessMock,
            data: {
              ...materialsStateSuccessMock.data,
              homepage: {
                topMaterials: materialsStateSuccessMock.data.main.materials,
                latestPosts: [postToUpdate, postToUpdate, postToUpdate, postToUpdate, postToUpdate, postToUpdate, postToUpdate, postToUpdate],
                mustRead: articleToUpdate,
                leagueMaterials: leagueMaterialsPropsMock
              },
            },
          },
          content: {
            ...realContentStateMock,
            content: []
          }
        }
      }
    );
    expect(screen.getByTestId('skeletonLoader')).toBeInTheDocument();
  });
});