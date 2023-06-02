import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { materialsStateSuccessMock } from '../../../utils/testing/testDataMocks/materials';
import { TopContentSection } from '../';


describe('TopContentSection tests', () => {
  test('should render passed data', () => {
    render(
      <MemoryRouter>
        <TopContentSection 
          materials={materialsStateSuccessMock.data.main.materials.slice(0, 7)} 
        />
      </MemoryRouter>
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(6);
  });
});