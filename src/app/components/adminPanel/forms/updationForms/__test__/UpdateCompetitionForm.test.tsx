import { cleanup, screen, waitFor } from '@testing-library/react';
import { UpdateCompetitionForm } from '../';
import { setupCompetitionsSuccessHandlers } from '../../../../../utils/testing/serverMocks/competitions';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod';
import { competitionToUpdate } from '../../../../../utils/testing/testDataMocks/competitions';


describe('UpdateCompetitionForm tests', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      value: {
        search: `/competitions/edit/${competitionToUpdate._id}`,
      },
    });
    setupCompetitionsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the component', async () => {
    renderWithProviders(<UpdateCompetitionForm />);
    await waitFor(() => {
      expect(screen.getByTestId('competitionForm')).toBeInTheDocument();
    });
  });
});