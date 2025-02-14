import { screen, render } from '@testing-library/react';
import { LatestGamesScores } from '../';


const scoresMock = ['W', 'W', 'W', 'W', 'W'];

describe('LastGamesScores tests', () => {
  test('should render passed data', () => {
    render(<LatestGamesScores scores={scoresMock} />);
    expect(screen.getAllByText('W')).toHaveLength(scoresMock.length);
  });
});