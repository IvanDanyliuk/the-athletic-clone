import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/testing/customRenderMethod';
import { SearchHeaderField } from '../';


const mockedUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux') as any,
  useDispatch: () => mockedUseDispatch,
}));


describe('SearchHeaderField tests', () => {
  test('should call a navigate hook after passing the search request value', async () => {
    renderWithProviders(<SearchHeaderField />);

    const searchBtn = screen.getByTestId('SearchIcon');
    fireEvent.click(searchBtn);

    const searchField = screen.getByRole('textbox');
    fireEvent.change(searchField, { target: { value: 'Arsenal' } });

    const searchFormBtn = screen.getAllByTestId('SearchIcon');
    fireEvent.click(searchFormBtn[1]);

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });
});