import { screen, render } from '@testing-library/react';
import { scheduleToUpdate } from '../../../utils/testing/testDataMocks/schedules';
import { MatchweekTable } from '../';


describe('MatchweekTable tests', () => {
  test('should render passed data', () => {
    render(<MatchweekTable matchweek={scheduleToUpdate.fixture[0]} />);
    expect(screen.getByText(scheduleToUpdate.fixture[0].games[0].location)).toBeInTheDocument();
  });
});