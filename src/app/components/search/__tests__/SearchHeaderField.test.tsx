import { screen } from '@testing-library/react';
import { SearchHeaderField } from '../';
import { renderWithProviders } from '../../../utils/testing/customRenderMethod';


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUseNavigate,
}));


describe('SearchHeaderField tests', () => {
  test('should call a navigate hook after passing the search request value', async () => {
    renderWithProviders(<SearchHeaderField />)

    screen.debug(undefined, 300000)
  });
});