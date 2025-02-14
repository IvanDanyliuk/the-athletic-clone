import { fireEvent, render, screen } from '@testing-library/react';
import MatchweelDetails from '../MatchweekDetails';
import ScheduleContext from '../../../../context/scheduleContext';


const matchweek = {
  id: 'test_id',
  matchweekName: 'Test Matchweek',
  basicDate: '2023-03-21T12:26:21.895Z',
  games: [
    {
      id: 'test_match_id',
      home: {
        club: {
          _id: 'test_club_id_1',
          fullName: 'Test Club 1',
          commonName: 'Club 1',
          shortName: 'TC1',
          country: 'Test Country',
          clubLogoUrl: '',
          stadium: 'Test Stadium',
        },
        points: 3,
        goalsFor: 2,
        goalsAgainst: 0, 
        final: 'W'
      },
      away: {
        club: {
          _id: 'test_club_id_2',
          fullName: 'Test Club 2',
          commonName: 'Club 2',
          shortName: 'TC2',
          country: 'Test Country',
          clubLogoUrl: '',
          stadium: 'Test Stadium',
        },
        points: 0,
        goalsFor: 0,
        goalsAgainst: 2,
        final: 'L'
      },
      date: new Date().toISOString(),
      location: 'Test Location',
      score: '2:0'
    }
  ]
};

const schedule = [] as any;
const isUpdatingMode = false;
const addScheduleTitle = jest.fn();
const addMatchweek = jest.fn();
const addMatch = jest.fn();
const deleteMatchweek = jest.fn();
const deleteMatch = jest.fn();


describe('MatchweekDetails tests', () => {
  test('should render the component', () => {
    render(
      <ScheduleContext.Provider 
        value={{ 
          schedule, 
          isUpdatingMode, 
          addScheduleTitle, 
          addMatchweek, 
          addMatch, 
          deleteMatchweek, 
          deleteMatch 
        }}
      >
        <MatchweelDetails matchweek={matchweek} />
      </ScheduleContext.Provider>
    );
    const deleteMatchBtn = screen.getByRole('button');
    fireEvent.click(deleteMatchBtn);
    expect(screen.getByText(matchweek.games[0].location)).toBeInTheDocument();
  });
});