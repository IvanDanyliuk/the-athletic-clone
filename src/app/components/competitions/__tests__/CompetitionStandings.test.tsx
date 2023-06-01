import { cleanup, screen } from '@testing-library/react';
import { setupCompetitionsSuccessHandlers } from '../../../utils/testing/serverMocks/competitions';
import { setupSchedulesSuccessHandlers } from '../../../utils/testing/serverMocks/schedules';
import { renderWithProviders } from '../../../utils/testing/customRenderMethod';
import { competitionToUpdate, competitionsStateSuccessMock } from '../../../utils/testing/testDataMocks/competitions';
import { scheduleToUpdate, schedulesStateSuccessMock } from '../../../utils/testing/testDataMocks/schedules';
import CompetitionStandings from '../CompetitionStandings';


describe('CompetitionStandings tests', () => {
  beforeEach(() => {
    setupCompetitionsSuccessHandlers();
    setupSchedulesSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the component data', async () => {
    renderWithProviders(
      <CompetitionStandings />,
      {
        preloadedState: {
          competitions: {
            ...competitionsStateSuccessMock,
            data: {
              ...competitionsStateSuccessMock.data,
              competition: competitionToUpdate
            }
          },
          schedules: {
            ...schedulesStateSuccessMock,
            data: {
              ...schedulesStateSuccessMock.data,
              schedule: scheduleToUpdate
            }
          }
        }
      }
    );
    expect(screen.getAllByRole('img')).toHaveLength(competitionToUpdate.clubs.length);
  });

  test('should not render the component data', async () => {
    renderWithProviders(
      <CompetitionStandings />,
      {
        preloadedState: {
          competitions: {
            ...competitionsStateSuccessMock,
            data: {
              ...competitionsStateSuccessMock.data,
              competition: competitionToUpdate
            }
          },
          schedules: {
            ...schedulesStateSuccessMock,
            data: {
              ...schedulesStateSuccessMock.data,
              schedule: null
            }
          }
        }
      }
    );
    expect(screen.queryAllByRole('img')).toHaveLength(0);
  });
});