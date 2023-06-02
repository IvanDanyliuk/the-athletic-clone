import { cleanup, fireEvent, screen } from '@testing-library/react';
import { setupCompetitionsSuccessHandlers } from '../../../utils/testing/serverMocks/competitions';
import { setupSchedulesSuccessHandlers } from '../../../utils/testing/serverMocks/schedules';
import { renderWithProviders } from '../../../utils/testing/customRenderMethod';
import { scheduleToUpdate, schedulesStateSuccessMock } from '../../../utils/testing/testDataMocks/schedules';
import { CompetitionScores } from '../';


describe('CompetitionScores tests', () => {
  beforeEach(() => {
    setupCompetitionsSuccessHandlers();
    setupSchedulesSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the fixture data', async () => {
    renderWithProviders(
      <CompetitionScores />,
      {
        preloadedState: {
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
    fireEvent.click(screen.getAllByRole('tab')[1]);
    expect(screen.getAllByRole('tab')).toHaveLength(scheduleToUpdate.fixture.length);
  });
  
  test('should render the loader component', async () => {
    renderWithProviders(
      <CompetitionScores />,
      {
        preloadedState: {
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
    expect(screen.getByTestId('backgroundLoader')).toBeInTheDocument();
  });
});