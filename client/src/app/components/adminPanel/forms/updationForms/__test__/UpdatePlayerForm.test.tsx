import { cleanup, screen, waitFor } from '@testing-library/react';
import { UpdatePlayerForm } from '../';
import { setupPlayersSuccessHandlers } from '../../../../../utils/testing/serverMocks/players';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod';
import { playerToUpdate } from '../../../../../utils/testing/testDataMocks/players';


describe('UpdatePlayerForm tests', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      value: {
        search: `/players/edit/${playerToUpdate._id}`,
      },
    });
    setupPlayersSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the component', async () => {
    renderWithProviders(<UpdatePlayerForm />);
    await waitFor(() => {
      expect(screen.getByTestId('playerForm')).toBeInTheDocument();
    });
  });
});