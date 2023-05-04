import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PopularMaterialItem from '../PopularMaterialItem';
import { articleToUpdate } from '../../../utils/testing/testDataMocks/materials';


describe('PopularMaterialItem tests', () => {
  test('should render passed data', () => {
    render(
      <MemoryRouter>
        <PopularMaterialItem 
          index={1} 
          data={articleToUpdate} 
        />
      </MemoryRouter>
    );
    expect(screen.getByText(articleToUpdate.title)).toBeInTheDocument();
  });
});