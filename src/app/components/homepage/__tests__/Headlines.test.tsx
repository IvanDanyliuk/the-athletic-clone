import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Headlines from '../Headlines';
import { contentSection } from '../../../utils/testing/testDataMocks/content';


describe('Headlines tests', () => {
  test('should render passed data', () => {
    render(
      <MemoryRouter>
        <Headlines data={contentSection.materials} />
      </MemoryRouter>
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(contentSection.materials.length);
  });
});