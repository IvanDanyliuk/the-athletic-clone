import { cleanup, screen } from '@testing-library/react';
import { setupCompetitionsSuccessHandlers } from '../../../utils/testing/serverMocks/competitions';
import { renderWithProviders } from '../../../utils/testing/customRenderMethod';
import { competitionToUpdate, competitionsStateSuccessMock } from '../../../utils/testing/testDataMocks/competitions';
import { setupSchedulesSuccessHandlers } from '../../../utils/testing/serverMocks/schedules';
import { CompetitionTeams } from '../';


describe('CompetitionTeams tests', () => {
  beforeEach(() => {
    setupCompetitionsSuccessHandlers();
    setupSchedulesSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the teams list', async () => {
    renderWithProviders(
      <CompetitionTeams />,
      {
        preloadedState: {
          competitions: {
            ...competitionsStateSuccessMock,
            data: {
              ...competitionsStateSuccessMock.data,
              competition: competitionToUpdate
            }
          }
        }
      }  
    );
    expect(screen.getAllByRole('img')).toHaveLength(competitionToUpdate.clubs.length);
  });

  test('should render the loader component', async () => {
    renderWithProviders(
      <CompetitionTeams />,
      {
        preloadedState: {
          competitions: {
            ...competitionsStateSuccessMock,
            data: {
              ...competitionsStateSuccessMock.data,
              competition: null
            }
          }
        }
      }  
    );
    expect(screen.getByTestId('backgroundLoader')).toBeInTheDocument();
  });
});