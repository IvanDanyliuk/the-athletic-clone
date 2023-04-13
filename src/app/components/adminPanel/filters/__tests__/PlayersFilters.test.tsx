import { screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../../utils/testing/customRenderMethod'; 
import { setupClubsSuccessHandlers } from '../../../../utils/testing/serverMocks/clubs';
import PlayersFilters from '../PlayersFilters';


const mockedUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux') as any,
  useDispatch: () => mockedUseDispatch,
}));


describe('PlayersFilters tests', () => {
  beforeEach(() => {
    setupClubsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should submit the form after passing data', async () => {
    renderWithProviders(<PlayersFilters />);

    const countryField = screen.getAllByTestId('selectField');
    //eslint-disable-next-line
    fireEvent.change(countryField[0].querySelector('input')!, { target: { value: 'United Kingdom' } });

    const submitBtn = screen.getByTestId('submitFilterDataBtn');
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    })
  });

  test('should clear the form after clicking the clear filters button', async () => {
    renderWithProviders(<PlayersFilters />);

    const countryField = screen.getAllByTestId('selectField');
    //eslint-disable-next-line
    fireEvent.change(countryField[0].querySelector('input')!, { target: { value: 'United Kingdom' } });

    const submitBtn = screen.getByTestId('clearFilterDataBtn');
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    })
  });
});