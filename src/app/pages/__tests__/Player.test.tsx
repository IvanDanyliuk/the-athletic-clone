import { cleanup, screen } from '@testing-library/react';
import { Player } from '../';
import { renderWithProviders } from '../../utils/testing/customRenderMethod';
import { setupPlayersSuccessHandlers } from '../../utils/testing/serverMocks/players';
import { playerToUpdate, playersStateSuccessMock } from '../../utils/testing/testDataMocks/players';


describe('Player page tests', () => {
  beforeEach(() => {
    setupPlayersSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the Player page', async () => {
    renderWithProviders(
      <Player />,
      {
        preloadedState: {
          players: {
            ...playersStateSuccessMock,
            data: {
              ...playersStateSuccessMock.data,
              player: playerToUpdate
            }
          }
        }
      }
    );
    expect(screen.getByText(`${playerToUpdate.firstName} ${playerToUpdate.lastName}`)).toBeInTheDocument();
  });

  test('should render the error messaget', async () => {
    renderWithProviders(
      <Player />,
      {
        preloadedState: {
          players: {
            ...playersStateSuccessMock,
            data: {
              ...playersStateSuccessMock.data,
              player: null
            }
          }
        }
      }
    );
    expect(screen.getByText('Player not found')).toBeInTheDocument();
  });
});