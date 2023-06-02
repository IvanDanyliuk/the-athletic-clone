import { screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../../utils/testing/customRenderMethod'; 
import { setupClubsSuccessHandlers } from '../../../../utils/testing/serverMocks/clubs';
import { ClubsFilters } from '../';


const mockedUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux') as any,
  useDispatch: () => mockedUseDispatch,
}));


describe('ClubsFilters tests', () => {
  beforeEach(() => {
    setupClubsSuccessHandlers();
  });

  afterEach(() => {
    cleanup();
  });

  test('should submit the form after passing data', async () => {
    renderWithProviders(<ClubsFilters />);

    const countryField = screen.getByTestId('selectField');
    //eslint-disable-next-line
    fireEvent.change(countryField.querySelector('input')!, { target: { value: 'United Kingdom' } });

    const submitBtn = screen.getByTestId('submitFilterDataBtn');
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    })
  });

  test('should clear the form after clicking the clear filters button', async () => {
    renderWithProviders(<ClubsFilters />);

    const countryField = screen.getByTestId('selectField');
    //eslint-disable-next-line
    fireEvent.change(countryField.querySelector('input')!, { target: { value: 'United Kingdom' } });

    const submitBtn = screen.getByTestId('clearFilterDataBtn');
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    })
  });
});