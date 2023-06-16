import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { materialsStateSuccessMock } from '../../../utils/testing/testDataMocks/materials';
import { SearchResults } from '../';


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