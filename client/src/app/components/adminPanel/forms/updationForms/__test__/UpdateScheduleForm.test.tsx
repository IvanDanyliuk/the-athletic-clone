import { cleanup, screen, waitFor } from '@testing-library/react';
import { UpdateScheduleForm } from '../';
import { setupSchedulesSuccessHandlers } from '../../../../../utils/testing/serverMocks/schedules';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod';
import { scheduleToUpdate } from '../../../../../utils/testing/testDataMocks/schedules';


describe('UpdateScheduleForm tests', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      value: {
        search: `/schedules/edit/${scheduleToUpdate._id}`,
      },
    });
    setupSchedulesSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the component', async () => {
    renderWithProviders(<UpdateScheduleForm />);
    await waitFor(() => {
      expect(screen.getByTestId('scheduleForm')).toBeInTheDocument();
    });
  });
});