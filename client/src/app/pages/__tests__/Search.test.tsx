import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import { Search } from '../';
import { setupCompetitionsSuccessHandlers } from '../../utils/testing/serverMocks/competitions';
import { setupMaterialsSuccessHandlers } from '../../utils/testing/serverMocks/materials';
import { renderWithProviders } from '../../utils/testing/customRenderMethod';
import { materialsStateSuccessMock } from '../../utils/testing/testDataMocks/materials';
import { competitionsStateSuccessMock } from '../../utils/testing/testDataMocks/competitions';


const mockedUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux') as any,
  useDispatch: () => mockedUseDispatch,
}));


describe('Search page tests', () => {
  beforeEach(() => {
    setupCompetitionsSuccessHandlers();
    setupMaterialsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should submit a search request', async () => {
    renderWithProviders(
      <Search />
    );

    const searchField = screen.getByRole('textbox');
    fireEvent.change(searchField, { target: { value: 'Arsenal' } });

    const submitBtn = screen.getByTestId('ManageSearchIcon');
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });

  test('should filter searched data', async () => {
    renderWithProviders(
      <Search />,
      {
        preloadedState: {
          materials: {
            ...materialsStateSuccessMock,
            search: materialsStateSuccessMock.data.main.materials.slice(0, 4)
          },
          competitions: competitionsStateSuccessMock
        }
      }
    );

    const filterCheckboxes = screen.getAllByRole('checkbox');
    fireEvent.click(filterCheckboxes[0]);
    fireEvent.click(filterCheckboxes[0]);
      
    await waitFor(() => {
      expect(filterCheckboxes[0]).not.toBeChecked();
    });
  });

  test('should call the useDispatch hook after clicking on the filter checkbox if the checkbox is clicked', async () => {
    renderWithProviders(
      <Search />,
      {
        preloadedState: {
          materials: {
            ...materialsStateSuccessMock,
            authors: [{ name: 'John Doe', userId: '63e8db447a8501b5b2a8428b' }],
            search: materialsStateSuccessMock.data.main.materials.slice(0, 1)
          },
          competitions: competitionsStateSuccessMock
        }
      }
    );

    await waitFor(() => {
      //eslint-disable-next-line
      fireEvent.click(screen.getAllByRole('checkbox')[0]);
      //eslint-disable-next-line
      fireEvent.click(screen.getAllByRole('checkbox')[0]);
    });

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });
});