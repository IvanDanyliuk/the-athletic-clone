import { cleanup, screen } from '@testing-library/react';
import { setupMaterialsSuccessHandlers } from '../../../utils/testing/serverMocks/materials';
import { setupCompetitionsSuccessHandlers } from '../../../utils/testing/serverMocks/competitions';
import { renderWithProviders } from '../../../utils/testing/customRenderMethod';
import { materialsStateSuccessMock } from '../../../utils/testing/testDataMocks/materials';
import { CompetitionHome } from '../';
import { StateStatus } from '../../../../features/types';


describe('CompetitionHome tests', () => {
  beforeEach(() => {
    setupMaterialsSuccessHandlers();
    setupCompetitionsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the materials data', async () => {
    renderWithProviders(<CompetitionHome />);
    expect(screen.getAllByText(new RegExp(materialsStateSuccessMock.data.main.materials[0].author.firstName, 'i'))).toHaveLength(6);
  });

  test('should render the loader component when the status is loading', async () => {
    renderWithProviders(
      <CompetitionHome />,
      {
        preloadedState: {
          materials: {
            ...materialsStateSuccessMock,
            status: StateStatus.Loading,
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
    expect(screen.getByTestId('backgroundLoader')).toBeInTheDocument();
  });

  test('should render the component with no data', async () => {
    renderWithProviders(
      <CompetitionHome />,
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
    expect(screen.getByTestId('backgroundLoader')).toBeInTheDocument();
  });
});