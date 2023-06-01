import { fireEvent, render, screen } from '@testing-library/react';
import { scheduleToUpdate } from '../../../utils/testing/testDataMocks/schedules';
import MatchweekPicker from '../MatchweekPicker';


const propsMock = {
  season: '2022/2023',
  matchweeks: scheduleToUpdate.fixture,
  setMatchweek: jest.fn()
}

describe('MatchweekDatePicker tests', () => {
  test('should call the handler function after picking the matchweek', () => {
    render(
      <MatchweekPicker 
        season={propsMock.season} 
        matchweeks={propsMock.matchweeks} 
        setMatchweek={propsMock.setMatchweek} 
      />
    );
    
    const calendarBtn = screen.getByTestId('CalendarMonthIcon');
    fireEvent.click(calendarBtn);

    const matchweekBtn = screen.getByText('Matchweek 1');
    fireEvent.click(matchweekBtn);

    expect(propsMock.setMatchweek).toHaveBeenCalled();
  });
});