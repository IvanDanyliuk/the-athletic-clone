import { screen, fireEvent, cleanup, waitFor, act } from '@testing-library/react';
import { renderWithProviders } from '../../../../../utils/testing/customRenderMethod'; 
import { setupMaterialsSuccessHandlers } from '../../../../../utils/testing/serverMocks/materials';
import { materialsStateSuccessMock } from '../../../../../utils/testing/testDataMocks/materials';
import MaterialsTableBody from '../MaterialsTableBody';
import { setupContentSuccessHandlers } from '../../../../../utils/testing/serverMocks/content';
import { contentStateSuccessMock } from '../../../../../utils/testing/testDataMocks/content';


const mockedUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux') as any,
  useDispatch: () => mockedUseDispatch,
}));


describe('MaterialsTableBody tests', () => {
  beforeEach(() => {
    setupMaterialsSuccessHandlers();
    setupContentSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should call the dispatch method after clicking on the delete button and submiting the club deleting', async () => {
    renderWithProviders(
      <MaterialsTableBody 
        page={0} 
        itemsPerPage={10} 
        materials={materialsStateSuccessMock.data.main.materials.slice(0, 2)} 
      />
    );

    const actionBtns = screen.getAllByTestId('rowActionBtn');
    fireEvent.click(actionBtns[1]);
    
    //eslint-disable-next-line
    await act(async () => {
      const deleteBtn = screen.getByText(/Delete/);
      fireEvent.click(deleteBtn);
    });

    const acceptBtn = screen.getByText(/Yes/);
    fireEvent.click(acceptBtn);

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });

  test('should add a material to content section in the content section edit mode', async () => {
    renderWithProviders(
      <MaterialsTableBody 
        page={0} 
        itemsPerPage={10} 
        materials={materialsStateSuccessMock.data.main.materials.slice(0, 2)} 
      />,
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
    
    const addBtn = screen.getAllByTestId('addBtn');
    fireEvent.click(addBtn[0]);

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });
});