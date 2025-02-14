import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import { setupMaterialsSuccessHandlers } from '../../../../../utils/testing/serverMocks/materials';
import { setupContentSuccessHandlers } from '../../../../../utils/testing/serverMocks/content';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod';
import { materialsStateSuccessMock } from '../../../../../utils/testing/testDataMocks/materials';
import { contentSection, contentStateSuccessMock } from '../../../../../utils/testing/testDataMocks/content';
import ContentForm from '../ContentForm';


const mockedUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux') as any,
  useDispatch: () => mockedUseDispatch,
}));

describe('ContentForm tests', () => {
  beforeEach(() => {
    setupMaterialsSuccessHandlers();
    setupContentSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should submit the form after clicking the Submit button: create content section case', async () => {
    renderWithProviders(
      <ContentForm />,
      {
        preloadedState: {
          materials: materialsStateSuccessMock,
          content: {
            ...contentStateSuccessMock,
            isContentEditingModeActive: true
          }
        }
      }
    );

    const titleField = screen.getByLabelText('Section Name');
    const maxLengthField = screen.getByLabelText('Max Length');

    fireEvent.change(titleField, { target: { value: 'Test Section Name' } });
    fireEvent.change(maxLengthField, { target: { value: '3' } });

    const addBtns = screen.getAllByTestId('addBtn');
    fireEvent.click(addBtns[0]);
    fireEvent.click(addBtns[1]);

    const submitBtn = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });

  test('should submit the form after clicking the Submit button: update content section case', async () => {
    renderWithProviders(
      <ContentForm sectionToUpdate={contentSection} />,
      {
        preloadedState: {
          materials: materialsStateSuccessMock,
          content: {
            ...contentStateSuccessMock,
            isContentEditingModeActive: true
          }
        }
      }
    );

    const titleField = screen.getByLabelText('Section Name');
    const maxLengthField = screen.getByLabelText('Max Length');

    fireEvent.change(titleField, { target: { value: 'Test Section Name' } });
    fireEvent.change(maxLengthField, { target: { value: '3' } });

    const addBtns = screen.getAllByTestId('addBtn');
    fireEvent.click(addBtns[0]);
    fireEvent.click(addBtns[1]);

    const submitBtn = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });
});