import { cleanup, screen, waitFor } from '@testing-library/react';
import { UpdateContentSection } from '../';
import { setupContentSuccessHandlers } from '../../../../../utils/testing/serverMocks/content';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod';
import { contentSection } from '../../../../../utils/testing/testDataMocks/content';


describe('UpdateContentSection tests', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      value: {
        search: `/content/edit/${contentSection._id}`,
      },
    });
    setupContentSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the component', async () => {
    renderWithProviders(<UpdateContentSection />);
    await waitFor(() => {
      expect(screen.getByTestId('contentForm')).toBeInTheDocument();
    });
  });
});