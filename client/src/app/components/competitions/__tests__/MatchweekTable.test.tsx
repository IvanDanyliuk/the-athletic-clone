import { screen, render } from '@testing-library/react';
import { scheduleToUpdate } from '../../../utils/testing/testDataMocks/schedules';
import { MatchweekTable } from '../';
import { BrowserRouter } from 'react-router-dom';


describe('MatchweekTable tests', () => {
  test('should render passed data', () => {
    render(
      <BrowserRouter>
        <MatchweekTable matchweek={scheduleToUpdate.fixture[0]} />
      </BrowserRouter>
    );
    expect(screen.getByText(scheduleToUpdate.fixture[0].games[0].location)).toBeInTheDocument();
  });
});