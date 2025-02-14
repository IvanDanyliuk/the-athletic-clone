import { cleanup, screen, waitFor } from '@testing-library/react';
import { UpdateMaterialForm } from '../';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod';
import { postToUpdate } from '../../../../../utils/testing/testDataMocks/materials';
import { setupMaterialsSuccessHandlers } from '../../../../../utils/testing/serverMocks/materials';


describe('UpdateMaterialForm tests', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      value: {
        search: `/materials/edit/${postToUpdate._id}`,
      },
    });
    setupMaterialsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the post form', async () => {
    renderWithProviders(<UpdateMaterialForm />);
    await waitFor(() => {
      expect(screen.getByTestId('postForm')).toBeInTheDocument();
    });
  });
});