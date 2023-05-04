import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PopularMaterials from '../PopularMaterials';
import { materialsStateSuccessMock } from '../../../utils/testing/testDataMocks/materials';


describe('PopularMaterials tests', () => {
  test('should render passed data', () => {
    render(
      <MemoryRouter>
        <PopularMaterials 
          materials={materialsStateSuccessMock.data.main.materials} 
        />
      </MemoryRouter>
    );
    expect(screen.getByText(materialsStateSuccessMock.data.main.materials.length)).toBeInTheDocument();
  });

  test('should render the error message when data has not passed', () => {
    render(
      <MemoryRouter>
        <PopularMaterials materials={[]} />
      </MemoryRouter>
    );
    expect(screen.getByText(/Cannot find any popular materials/)).toBeInTheDocument();
  });
});