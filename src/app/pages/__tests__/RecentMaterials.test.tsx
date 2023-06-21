import { cleanup, screen } from '@testing-library/react';
import { RecentMaterials } from '..';
import { setupMaterialsSuccessHandlers } from '../../utils/testing/serverMocks/materials';
import { renderWithProviders } from '../../utils/testing/customRenderMethod';
import { materialsStateSuccessMock } from '../../utils/testing/testDataMocks/materials';


describe('Materials page tests', () => {
  beforeEach(() => {
    setupMaterialsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the component data', async () => {
    renderWithProviders(<RecentMaterials />);
    expect(screen.getAllByRole('link')).toHaveLength(materialsStateSuccessMock.data.main.materials.length - 1);
  });

  test('should render the loader component', async () => {
    renderWithProviders(
      <RecentMaterials />,
      {
        preloadedState: {
          materials: {
            ...materialsStateSuccessMock,
            data: {
              ...materialsStateSuccessMock.data,
              main: {
                ...materialsStateSuccessMock.data.main,
                materials: []
              }
            }
          }
        }
      }
    );
    expect(screen.getByTestId('backgroundLoader')).toBeInTheDocument();
  });
});