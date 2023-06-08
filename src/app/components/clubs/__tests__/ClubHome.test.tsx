import { cleanup, screen } from '@testing-library/react';
import { setupMaterialsSuccessHandlers } from '../../../utils/testing/serverMocks/materials';
import { setupCompetitionsSuccessHandlers } from '../../../utils/testing/serverMocks/competitions';
import { setupClubsSuccessHandlers } from '../../../utils/testing/serverMocks/clubs';
import { setupPlayersSuccessHandlers } from '../../../utils/testing/serverMocks/players';
import { setupSchedulesSuccessHandlers } from '../../../utils/testing/serverMocks/schedules';
import { renderWithProviders } from '../../../utils/testing/customRenderMethod';
import { scheduleToUpdate, schedulesStateSuccessMock } from '../../../utils/testing/testDataMocks/schedules';
import { clubToUpdate, clubsStateSuccessMock } from '../../../utils/testing/testDataMocks/clubs';
import { competitionsStateSuccessMock } from '../../../utils/testing/testDataMocks/competitions';
import { playersStateSuccessMock } from '../../../utils/testing/testDataMocks/players';
import { materialsStateSuccessMock } from '../../../utils/testing/testDataMocks/materials';
import { ClubHome } from '../';


describe('ClubHome tests', () => {
  beforeEach(() => {
    setupMaterialsSuccessHandlers();
    setupCompetitionsSuccessHandlers();
    setupClubsSuccessHandlers();
    setupPlayersSuccessHandlers();
    setupSchedulesSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the component', async () => {
    renderWithProviders(
      <ClubHome />,
      {
        preloadedState: {
          schedules: {
            ...schedulesStateSuccessMock,
            data: {
              ...schedulesStateSuccessMock.data,
              schedule: scheduleToUpdate
            }
          },
          clubs: {
            ...clubsStateSuccessMock,
            data: {
              ...clubsStateSuccessMock.data,
              club: clubToUpdate
            }
          },
          competitions: competitionsStateSuccessMock,
          players: playersStateSuccessMock,
          materials: materialsStateSuccessMock
        }
      }
    );
    expect(screen.getAllByText(`${playersStateSuccessMock.data.players[0].firstName} ${playersStateSuccessMock.data.players[0].lastName}`)).toHaveLength(playersStateSuccessMock.data.players.length / 2);
  });
});