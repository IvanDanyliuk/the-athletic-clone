import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { playersStateSuccessMock } from '../../../utils/testing/testDataMocks/players';
import { PlayersTable } from '../';


describe('PlayersTable tests', () => {
  test('should render passed data', () => {
    render(
      <MemoryRouter>
        <PlayersTable title='Midfielders' players={playersStateSuccessMock.data.main.players} />
      </MemoryRouter>
    );
    expect(screen.getAllByTestId('playersTableRow')).toHaveLength(playersStateSuccessMock.data.main.players.length);
  });
});