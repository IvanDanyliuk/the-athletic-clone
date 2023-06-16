import { screen, render } from '@testing-library/react';
import { SearchResults } from '../';
import { materialsStateSuccessMock } from '../../../utils/testing/testDataMocks/materials';
import { BrowserRouter } from 'react-router-dom';


describe('SearchResults tests', () => {
  test('should render passed data', () => {
    render(
      <BrowserRouter>
        <SearchResults materials={materialsStateSuccessMock.data.main.materials} />
      </BrowserRouter>
    );

    expect(screen.getAllByRole('listitem')).toHaveLength(materialsStateSuccessMock.data.main.materials.length);
  });
});