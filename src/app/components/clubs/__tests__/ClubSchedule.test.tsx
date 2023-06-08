import { cleanup, screen } from '@testing-library/react';
import { setupClubsSuccessHandlers } from '../../../utils/testing/serverMocks/clubs';
import { setupSchedulesSuccessHandlers } from '../../../utils/testing/serverMocks/schedules';
import { renderWithProviders } from '../../../utils/testing/customRenderMethod';
import { clubToUpdate, clubsStateSuccessMock } from '../../../utils/testing/testDataMocks/clubs';
import { schedulesStateSuccessMock } from '../../../utils/testing/testDataMocks/schedules';
import { ClubSchedule } from '../';


describe('ClubSchedule tests', () => {
  beforeEach(() => {
    setupClubsSuccessHandlers();
    setupSchedulesSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the component: success case', async () => {
    renderWithProviders(
      <ClubSchedule />,
      {
        preloadedState: {
          clubs: {
            ...clubsStateSuccessMock,
            data: {
              ...clubsStateSuccessMock.data,
              club: clubToUpdate
            }
          },
          schedules: schedulesStateSuccessMock
        }
      }
    );

    const matchesCount = schedulesStateSuccessMock.data.main.schedules
      .reduce((acc, cur) => acc + cur.fixture
        .reduce((a, c) => a + c.games.length,0), 0);

    expect(screen.getAllByTestId('scheduleTableRow')).toHaveLength(matchesCount);
  });

  test('should render the component: error case', async () => {
    renderWithProviders(
      <ClubSchedule />,
      {
        preloadedState: {
          clubs: {
            ...clubsStateSuccessMock,
            data: {
              ...clubsStateSuccessMock.data,
              club: null
            }
          },
          schedules: {
            ...schedulesStateSuccessMock,
            data: {
              ...schedulesStateSuccessMock.data,
              main: {
                schedules: [],
                schedulesCount: 0
              }
            }
          }
        }
      }
    );
    
    expect(screen.queryAllByTestId('scheduleTableRow')).toHaveLength(0);
  });
});