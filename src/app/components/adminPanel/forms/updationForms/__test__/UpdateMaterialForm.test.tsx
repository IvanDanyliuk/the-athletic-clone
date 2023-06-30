import { cleanup, screen, waitFor } from '@testing-library/react';
import { UpdateMaterialForm } from '../';
import { setupContentSuccessHandlers } from '../../../../../utils/testing/serverMocks/content';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod';
import { postToUpdate } from '../../../../../utils/testing/testDataMocks/materials';


describe('UpdateMaterialForm tests', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      value: {
        search: `/materials/edit/${postToUpdate._id}`,
      },
    });
    setupContentSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the component', async () => {
    renderWithProviders(<UpdateMaterialForm />);
    await waitFor(() => {
      expect(screen.getByTestId('postForm')).toBeInTheDocument();
    });
  });
});