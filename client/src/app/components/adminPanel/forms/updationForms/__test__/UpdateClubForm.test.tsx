import { cleanup, screen, waitFor } from '@testing-library/react';
import { UpdateClubForm } from '../';
import { setupClubsSuccessHandlers } from '../../../../../utils/testing/serverMocks/clubs';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod';
import { clubToUpdate } from '../../../../../utils/testing/testDataMocks/clubs';


describe('UpdateClubForm tests', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      value: {
        search: `/clubs/edit/${clubToUpdate._id}`,
      },
    });
    setupClubsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the component', async () => {
    renderWithProviders(<UpdateClubForm />);
    await waitFor(() => {
      expect(screen.getByTestId('clubForm')).toBeInTheDocument();
    });
  });
});