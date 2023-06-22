import { cleanup, screen } from '@testing-library/react';
import { Posts } from '../';
import { setupMaterialsSuccessHandlers } from '../../utils/testing/serverMocks/materials';
import { renderWithProviders } from '../../utils/testing/customRenderMethod';
import { materialsStateSuccessMock } from '../../utils/testing/testDataMocks/materials';


describe('Posts page tests', () => {
  beforeEach(() => {
    setupMaterialsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the component', async () => {
    renderWithProviders(
      <Posts />,
      {
        preloadedState: {
          materials: materialsStateSuccessMock
        }
      }
    );
    expect(screen.getAllByRole('link')).toHaveLength(materialsStateSuccessMock.data.main.materials.length + 1);
  });

  test('should render the loader component', async () => {
    renderWithProviders(
      <Posts />,
      {
        preloadedState: {
          materials: {
            ...materialsStateSuccessMock,
            data: {
              ...materialsStateSuccessMock.data,
              main: {
                materials: [],
                materialsCount: 0
              }
            }
          }
        }
      }
    );
    expect(screen.getByText('Cannot find materials')).toBeInTheDocument();
  });
});