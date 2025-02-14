import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { articleToUpdate } from '../../../utils/testing/testDataMocks/materials';
import { MustReadSection } from '../';


describe('MustReadSection tests', () => {
  test('should render passed data', () => {
    render(
      <MemoryRouter>
        <MustReadSection article={articleToUpdate} />
      </MemoryRouter>
    );
    expect(screen.getByText(articleToUpdate.title)).toBeInTheDocument();
  });
});